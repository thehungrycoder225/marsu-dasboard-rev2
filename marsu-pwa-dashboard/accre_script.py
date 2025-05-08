import pandas as pd
import json
from datetime import datetime

def preprocess_accreditation_csv(input_csv, output_json):
    # Load CSV data
    df = pd.read_csv(input_csv)
    
    # Clean column names
    df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_').str.replace('(', '').str.replace(')', '')
    
    # Standardize program names
    program_replacements = {
        'BS in': 'Bachelor of Science in',
        'AB in': 'Bachelor of Arts in',
        'BS ': 'Bachelor of Science in ',
        'AB ': 'Bachelor of Arts in '
    }
    for old, new in program_replacements.items():
        df['program'] = df['program'].str.replace(old, new)
    
    # Parse dates (handling multiple formats)
    def parse_date(date_str):
        try:
            return pd.to_datetime(date_str, errors='coerce')
        except:
            return pd.NaT
    
    df['from_date'] = df['from_mmddyyyy'].apply(parse_date)
    df['to_date'] = df['to_mmddyyyy'].apply(parse_date)
    
    # Calculate accreditation status
    def get_status(row):
        if pd.isna(row['to_date']):
            return 'Pending'
        return 'Active' if datetime.now() <= row['to_date'] else 'Expired'
    
    df['status'] = df.apply(get_status, axis=1)
    
    # Determine accreditation level
    level_cols = ['level_1', 'level_2', 'level_3', 'level_4']
    df['accreditation_level'] = 'Not Accredited'
    for i, col in enumerate(level_cols, 1):
        df.loc[df[col] == 1, 'accreditation_level'] = f'Level {i}'
    
    # Calculate program age
    df['year_established'] = df['year_of_initial_operation'].str.extract(r'(\d{4})')[0].astype(float)
    df['program_age'] = datetime.now().year - df['year_established']
    
    # Group data
    grouped = df.groupby(['year', 'campus'])
    
    # Create JSON structure
    output = []
    for (year, campus), group in grouped:
        campus_data = {
            'year': int(year),
            'campus': campus,
            'programs': [],
            'stats': {
                'total_programs': len(group),
                'accredited_programs': sum(group['accreditation_level'] != 'Not Accredited'),
                'active_accreditations': sum(group['status'] == 'Active'),
                'average_program_age': round(group['program_age'].mean(), 1),
                'expiring_soon': sum((group['status'] == 'Active') & 
                                  (group['to_date'] < datetime.now() + pd.Timedelta(days=365)))
            }
        }
        
        for _, row in group.iterrows():
            program_data = {
                'name': row['program'],
                'accreditation_level': row['accreditation_level'],
                'status': row['status'],
                'valid_from': row['from_date'].strftime('%Y-%m-%d') if not pd.isna(row['from_date']) else None,
                'valid_to': row['to_date'].strftime('%Y-%m-%d') if not pd.isna(row['to_date']) else None,
                'program_age': int(row['program_age']),
                'year_established': int(row['year_established']) if not pd.isna(row['year_established']) else None
            }
            campus_data['programs'].append(program_data)
        
        output.append(campus_data)
    
    # Save to JSON
    with open(output_json, 'w') as f:
        json.dump(output, f, indent=2)

# Usage example
preprocess_accreditation_csv('accreditation_raw.csv', 'accreditation_processed.json')