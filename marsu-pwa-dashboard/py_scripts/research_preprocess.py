import pandas as pd
import json
from datetime import datetime

# Load raw data
df = pd.read_csv('research_raw.csv')

# Data cleaning
df['Date Started'] = pd.to_datetime(df['Date Started'], errors='coerce')
df['Date of Completion'] = pd.to_datetime(df['Date of Completion'], errors='coerce')
df['Date of Presentation'] = pd.to_datetime(df['Date of Presentation'], errors='coerce')

# Calculate durations
df['Research Duration (days)'] = (df['Date of Completion'] - df['Date Started']).dt.days

# Extract month/year for analysis
df['Year-Month'] = df['Date of Presentation'].dt.to_period('M')

# Categorize research types
def categorize_research(title):
    title = title.lower()
    if any(x in title for x in ['satisfaction', 'perception', 'attitude']):
        return 'Social Perception'
    elif any(x in title for x in ['impact', 'effect', 'influence']):
        return 'Impact Analysis'
    elif any(x in title for x in ['development', 'framework', 'model']):
        return 'Model Development'
    elif any(x in title for x in ['experience', 'narrative', 'phenomenological']):
        return 'Qualitative Study'
    else:
        return 'Other'

df['Research Type'] = df['Research Title'].apply(categorize_research)

# Count researchers
df['Researcher Count'] = df['Name of Faculty Researcher'].str.split('\n').str.len()

# Prepare for JSON output
def create_research_document(row):
    return {
        "year": row['Year'],
        "title": row['Research Title'],
        "researchers": [name.strip() for name in row['Name of Faculty Researcher'].split('\n')],
        "status": row['Status of Research'],
        "duration_days": row['Research Duration (days)'],
        "presentation_lag": row['Presentation Lag (days)'],
        "forum": row['Title of Forum'],
        "venue": row['Venue'],
        "forum_type": row['Forum Type'],
        "research_type": row['Research Type'],
        "researcher_count": row['Researcher Count'],
        "presentation_date": row['Date of Presentation'].strftime('%Y-%m-%d') if pd.notna(row['Date of Presentation']) else None
    }

# Generate summary statistics
def generate_summary(df):
    summary = {
        "total_research": len(df),
        "by_year": df['Year'].value_counts().to_dict(),
        "by_forum_type": df['Forum Type'].value_counts().to_dict(),
        "by_research_type": df['Research Type'].value_counts().to_dict(),
        "avg_duration": df['Research Duration (days)'].mean(),
        "avg_researchers": df['Researcher Count'].mean(),
        "top_researchers": df['Name of Faculty Researcher'].str.split('\n').explode().str.strip().value_counts().head(10).to_dict()
    }
    return summary

# Final output
output = {
    "research_data": [create_research_document(row) for _, row in df.iterrows()],
    "summary_stats": generate_summary(df),
    "metadata": {
        "last_updated": datetime.now().isoformat(),
        "data_source": "research_raw.csv"
    }
}

# Save to JSON
with open('research_processed.json', 'w') as f:
    json.dump(output, f, indent=2)

print("Data preprocessing complete. Output saved to research_processed.json")