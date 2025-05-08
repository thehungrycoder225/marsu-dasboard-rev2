import pandas as pd
import numpy as np
import json
# from pymongo import MongoClient

# Load raw data
df = pd.read_csv('enrollments_raw.csv')

# 1. Standardize program names
PROGRAM_MAPPING = {
    'Bachelor of Arts major in English': 'Bachelor of Arts in English Language Studies',
    'Bachelor of Science in Information System': 'Bachelor of Science in Information Systems'
}
df['Program'] = df['Program'].replace(PROGRAM_MAPPING)

# 2. Categorize programs
def categorize_program(program):
    if 'Engineering' in program: return 'Engineering'
    elif 'Education' in program: return 'Education'
    elif 'Agriculture' in program: return 'Agriculture'
    elif any(x in program for x in ['Business', 'Account', 'Entrepreneur']): return 'Business'
    elif any(x in program for x in ['Technology', 'Information', 'Computer']): return 'Technology'
    elif 'Science' in program: return 'Sciences'
    else: return 'Other'

df['Category'] = df['Program'].apply(categorize_program)

# 3. Calculate metrics
df = df.sort_values(['Campus', 'Program', 'Year'])
df['YoY_Growth'] = df.groupby(['Campus', 'Program'])['Enrollment'].pct_change()
df['Rank'] = df.groupby(['Campus', 'Year'])['Enrollment'].rank(ascending=False, method='min')

# 4. Generate MongoDB documents
def create_documents(year_group):
    campus = year_group['Campus'].iloc[0]
    year = year_group['Year'].iloc[0]
    
    return {
        "year": int(year),
        "campus": campus,
        "programs": year_group.apply(lambda x: {
            "name": x['Program'],
            "enrollment": int(x['Enrollment']),
            "category": x['Category'],
            "growth_rate": round(x['YoY_Growth'], 4) if not pd.isna(x['YoY_Growth']) else None,
            "rank": int(x['Rank']),
            "status": "active" if x['Enrollment'] > 0 else "inactive"
        }, axis=1).tolist(),
        "metadata": {
            "total_enrollment": int(year_group['Enrollment'].sum()),
            "program_count": len(year_group),
            "top_program": year_group.loc[year_group['Rank'].idxmin(), 'Program']
        }
    }

# 5. Create time-series and wide-format outputs
time_series_data = df.groupby(['Year', 'Campus']).apply(create_documents).tolist()

wide_format = df.pivot_table(
    index=['Year', 'Campus'],
    columns='Program',
    values='Enrollment',
    fill_value=0
).reset_index().to_dict('records')

# Summarize the wide format for each campus
def calculate_summary_stats(data):
    summary = []
    for year in sorted(df['Year'].unique()):
        yearly_data = df[df['Year'] == year]
        total_enrollment = yearly_data['Enrollment'].sum()
        yoy_growth = None if year == min(df['Year']) else (
            (total_enrollment - df[df['Year'] == year-1]['Enrollment'].sum()) / 
            df[df['Year'] == year-1]['Enrollment'].sum()
        )
        
        campus_contrib = yearly_data.groupby('Campus')['Enrollment'].sum().nlargest(3).to_dict()
        top_programs = yearly_data.nlargest(3, 'Enrollment')[['Program', 'Enrollment']].to_dict('records')
        
        summary.append({
            "year": int(year),
            "total_enrollment": int(total_enrollment),
            "yoy_growth": round(yoy_growth, 4) if yoy_growth else None,
            "top_campuses": campus_contrib,
            "top_programs": top_programs
        })
    return summary



# 6. Save outputs
output = {
    "time_series": time_series_data,
    "wide_format": wide_format,
    "summary": calculate_summary_stats(df),
    "metadata": {
        "source": "enrollments_raw.csv",
        "processed_by": "Data Processing Script",
        "processing_date": pd.Timestamp.now().isoformat()
    },
    "last_updated": pd.Timestamp.now().isoformat()
}

with open('enrollments_processed.json', 'w') as f:
    json.dump(output, f, indent=2)

print("Preprocessing complete. Output saved to enrollments_processed.json")