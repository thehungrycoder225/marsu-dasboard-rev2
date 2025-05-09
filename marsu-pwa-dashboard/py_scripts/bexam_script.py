import pandas as pd
import json
from datetime import datetime

# Load and clean data
df = pd.read_csv('boardexam_raw.csv')

# Standardize program names
PROGRAM_CORRECTIONS = {
    'Bacelor of Science in Electrical Engineering': 'Bachelor of Science in Electrical Engineering',
    'Bachelor of Science in  Social Work': 'Bachelor of Science in Social Work'
}
df['Program'] = df['Program'].replace(PROGRAM_CORRECTIONS)

# Extract year from exam date and create season column
def get_exam_season(date_str):
    if not isinstance(date_str, str):
        return 'Unknown'
    if 'May' in date_str or 'November' in date_str:
        return 'Fall'
    elif 'September' in date_str or 'October' in date_str:
        return 'Summer'
    elif 'March' in date_str or 'April' in date_str:
        return 'Spring'
    elif 'January' in date_str or 'February' in date_str:
        return 'Winter'
    else:
        return 'Special'

df['Exam Season'] = df['Date'].apply(get_exam_season)

# Calculate metrics
df['Passing Rate'] = df['Number of 1st Time Passers'] / df['Number of 1st Time Takers']
df['Passing Rate'] = df['Passing Rate'].fillna(0)  # Handle division by zero

# Categorize programs
def categorize_program(program):
    if 'Nursing' in program: return 'Health Sciences'
    elif 'Engineering' in program: return 'Engineering'
    elif 'Education' in program: return 'Education'
    elif 'Social Work' in program: return 'Social Sciences'
    elif 'Agriculture' in program or 'Fisheries' in program: return 'Agriculture'
    else: return 'Other'

df['Category'] = df['Program'].apply(categorize_program)

# Generate summary statistics
def generate_summary(df):
    university_trends = df.groupby('Year').agg({
        'Number of 1st Time Takers': 'sum',
        'Number of 1st Time Passers': 'sum'
    }).reset_index()
    university_trends['Passing Rate'] = university_trends['Number of 1st Time Passers'] / university_trends['Number of 1st Time Takers']
    
    campus_performance = df.groupby(['Year', 'Campus']).agg({
        'Number of 1st Time Takers': 'sum',
        'Number of 1st Time Passers': 'sum'
    }).reset_index()
    
    program_rankings = df.groupby(['Year', 'Program']).agg({
        'Passing Rate': 'mean',
        'Number of 1st Time Takers': 'sum'
    }).reset_index()
    
    return {
        'university_trends': university_trends.to_dict('records'),
        'campus_performance': campus_performance.to_dict('records'),
        'program_rankings': program_rankings.to_dict('records'),
        'detailed_data': df.to_dict('records')
    }

# Save processed data
processed_data = generate_summary(df)
with open('boardexam_processed.json', 'w') as f:
    json.dump(processed_data, f, indent=2)

print("Data preprocessing complete. Output saved to boardexam_processed.json")