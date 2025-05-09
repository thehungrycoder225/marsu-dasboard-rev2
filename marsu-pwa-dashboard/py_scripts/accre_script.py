import pandas as pd
import json
from datetime import datetime
import re

def clean_program_name(name):
    """Standardize program names across years."""
    name = str(name).strip()
    replacements = [
        ('BS in', 'Bachelor of Science in'),
        ('AB in', 'Bachelor of Arts in'),
        ('BSEd', 'Bachelor of Secondary Education'),
        ('BSED', 'Bachelor of Secondary Education'),
        (r'\s+', ' ')  # Remove extra spaces
    ]
    for old, new in replacements:
        name = re.sub(old, new, name)
    return name

def parse_date_column(df, column_name):
    """Parse date columns with mixed formats."""
    def parse_date(date_str):
        if pd.isna(date_str):
            return None
        try:
            if isinstance(date_str, (int, float)) and date_str > 1000:
                return (datetime(1899, 12, 30) + pd.Timedelta(days=date_str)).date()
            return pd.to_datetime(date_str, errors='coerce').date()
        except:
            return None

    df[column_name] = df[column_name].apply(parse_date)

def preprocess_accreditation_data(input_csv, output_json):
    """Preprocess accreditation data from CSV and save as JSON."""
    try:
        df = pd.read_csv(input_csv, encoding='utf-8', on_bad_lines='skip')
    except pd.errors.ParserError as e:
        raise ValueError(f"Error reading the CSV file: {e}")

    # Clean column names
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(' ', '_')
        .str.replace(r'[\n\r]', '', regex=True)
        .str.replace(r'[^\w_]', '', regex=True)
    )

    # Standardize program names
    if 'program' in df.columns:
        df['program'] = df['program'].apply(clean_program_name)

    # Parse date columns
    for col in ['from_mmddyyyy', 'to_mmddyyyy']:
        if col in df.columns:
            parse_date_column(df, col)

    # Extract year established
    if 'year_of_initial_operation' in df.columns:
        df['year_established'] = (
            df['year_of_initial_operation']
            .astype(str)
            .str.extract(r'(\d{4})')[0]
            .astype(float)
        )

    # Calculate program age
    if 'year' in df.columns and 'year_established' in df.columns:
        df['program_age'] = df['year'] - df['year_established']

    # Determine accreditation level
    level_cols = [f'level_{i}' for i in range(1, 5)] + ['cs', 'na']
    df['accreditation_level'] = 'Not Accredited'
    for col in level_cols:
        if col in df.columns:
            accredited = df[col] == 1
            level_name = col.upper().replace('_', ' ') if col.startswith('level') else col.upper()
            df.loc[accredited, 'accreditation_level'] = level_name

    # Calculate accreditation status
    def get_status(row):
        if pd.isna(row['to_mmddyyyy']):
            return 'Pending'
        if row['to_mmddyyyy'] < datetime.now().date():
            return 'Expired'
        return 'Active'

    # Ensure 'status' column is created even if 'to_mmddyyyy' is missing or improperly formatted
    if 'to_mmddyyyy' in df.columns:
        df['status'] = df.apply(get_status, axis=1)
    else:
        df['status'] = 'Pending'  # Default to 'Pending' if 'to_mmddyyyy' is not available

    # Group by year and campus
    grouped = df.groupby(['year', 'campus'])

    # Build structured output
    output = []
    for (year, campus), group in grouped:
        campus_data = {
            'year': int(year),
            'campus': campus,
            'programs': [],
            'active_accreditations': len(group[group['status'] == 'Active']),
            'total_programs': len(group),
            'accredited_programs': len(group[group['accreditation_level'] != 'Not Accredited']),
            'expiring_soon': len(group[
                (group['status'] == 'Active') & 
                (group['to_mmddyyyy'] < (datetime.now().date() + pd.Timedelta(days=180)))
            ]),
            'average_program_age': round(group['program_age'].mean(), 1) if 'program_age' in group.columns else None
        }

        for _, row in group.iterrows():
            program_data = {
                'name': row['program'],
                'accreditation_level': row['accreditation_level'],
                'status': row['status'],
                'valid_from': row['from_mmddyyyy'].isoformat() if pd.notna(row['from_mmddyyyy']) else None,
                'valid_to': row['to_mmddyyyy'].isoformat() if pd.notna(row['to_mmddyyyy']) else None,
                'years_established': int(row['program_age']) if 'program_age' in row and pd.notna(row['program_age']) else None,
                'year_established': int(row['year_established']) if 'year_established' in row and pd.notna(row['year_established']) else None
            }
            campus_data['programs'].append(program_data)

        output.append(campus_data)

    # Save to JSON
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

# Example usage
preprocess_accreditation_data('accreditation_data.csv', 'accreditation_processed.json')