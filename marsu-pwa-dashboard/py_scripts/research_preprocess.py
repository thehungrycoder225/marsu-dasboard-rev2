import pandas as pd
import json
from datetime import datetime
import re
from dateutil.parser import parse
import unicodedata
from collections import defaultdict
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='research_processing.log'
)
logger = logging.getLogger(__name__)

def clean_text(text):
    """Normalize special characters and clean text with enhanced handling"""
    if pd.isna(text):
        return ""
    
    try:
        text = str(text)
        # Normalize unicode characters and remove control characters
        text = unicodedata.normalize('NFKC', text)
        # Remove special characters except basic punctuation
        text = re.sub(r'[^\w\s\-.,;:()&/\']', ' ', text)
        # Collapse multiple spaces
        text = re.sub(r'\s+', ' ', text)
        return text.strip()
    except Exception as e:
        logger.warning(f"Text cleaning failed: {str(e)}")
        return str(text).strip()

def parse_complex_date(date_str):
    """Enhanced date parsing with better error handling"""
    if pd.isna(date_str) or not str(date_str).strip():
        return None
    
    date_str = str(date_str).strip()
    
    try:
        # Handle date ranges like "March 14-17, 2023"
        if re.match(r'^[A-Za-z]+\s\d{1,2}-\d{1,2},\s\d{4}$', date_str):
            parts = date_str.split(',')
            year = parts[-1].strip()
            month_day = parts[0].split('-')[0].strip()
            return parse(f"{month_day}, {year}").strftime('%Y-%m-%d')
        
        # Handle month-year formats like "January 2023"
        if re.match(r'^[A-Za-z]+\s\d{4}$', date_str):
            return parse(date_str).strftime('%Y-%m-01')
            
        # Handle various other date formats
        return parse(date_str, dayfirst=True, yearfirst=False).strftime('%Y-%m-%d')
    except Exception as e:
        logger.warning(f"Could not parse date '{date_str}': {str(e)}")
        return None

def extract_authors(author_str):
    """Enhanced author extraction with better name parsing"""
    if pd.isna(author_str):
        return []
    
    try:
        # Normalize different separators
        author_str = re.sub(r'[\n&,]', '|', str(author_str))
        # Handle "and" as separator
        author_str = re.sub(r'\band\b', '|', author_str, flags=re.IGNORECASE)
        
        authors = []
        for author in author_str.split('|'):
            author = author.strip()
            if not author:
                continue
                
            # Clean and normalize author names
            author = clean_text(author)
            # Remove academic titles and suffixes
            author = re.sub(r'^(Dr\.?|Prof\.?|Mr\.?|Ms\.?|Mrs\.?)\s*', '', author, flags=re.IGNORECASE)
            author = re.sub(r'\s*(Ph\.?D\.?|M\.?D\.?|M\.?Sc\.?|B\.?Sc\.?|Jr\.?|Sr\.?|I{1,3}|IV|V)$', '', author, flags=re.IGNORECASE)
            
            if author:
                authors.append(author)
                
        return authors
    except Exception as e:
        logger.warning(f"Author extraction failed: {str(e)}")
        return []

def categorize_research(title):
    """Enhanced research categorization with better pattern matching"""
    if not isinstance(title, str) or not title.strip():
        return 'Other'
    
    title = title.lower()
    
    # Ordered categories - more specific first
    categories = [
        ('Health', r'health|medical|disease|vaccin|hospital|nutrition|medicine|public health'),
        ('Education', r'teach|learn|student|curriculum|language|school|education|pedagog'),
        ('Agriculture', r'agri|farm|crop|fish|livestock|seaweed|carabao|poultry|fisher'),
        ('Technology', r'tech|system|app|model|digital|computer|network|software|hardware|algorithm|ai\b|artificial intelligence|machine learning'),
        ('Environment', r'environ|climate|disaster|flood|mining|sustain|ecolog|conservation|pollution'),
        ('Tourism', r'touris|heritage|hotel|resort|beach|travel|visitor|hospitality'),
        ('Business', r'business|enterprise|market|msme|commerce|finance|econom|accounting|entrepreneur'),
        ('Social', r'social|community|gender|culture|policy|governance|democra|politic|sociolog|anthropolog'),
        ('Engineering', r'engineer|construction|material|mechanical|civil|electrical'),
        ('Arts', r'art|music|dance|theater|literature|creative|film|cinema')
    ]
    
    for category, pattern in categories:
        if re.search(pattern, title):
            return category
            
    return 'Other'

def validate_data(df):
    """Data validation and quality checks"""
    logger.info("Starting data validation...")
    
    # Check for missing critical fields
    required_fields = ['Research Title', 'Name of Faculty Researcher / Author', 'Year']
    for field in required_fields:
        if df[field].isnull().any():
            logger.warning(f"Missing values found in {field}: {df[field].isnull().sum()}")

    # Validate dates
    date_fields = ['Date Started', 'Date of Completion', 'Date of Presentation']
    for field in date_fields:
        invalid_dates = df[field].isnull().sum()
        if invalid_dates > 0:
            logger.warning(f"Invalid/missing dates in {field}: {invalid_dates}")

    # Check for duplicate entries
    duplicates = df.duplicated(subset=['Research Title', 'Name of Faculty Researcher / Author', 'Year']).sum()
    if duplicates > 0:
        logger.warning(f"Potential duplicate entries found: {duplicates}")

    logger.info("Data validation completed")

def preprocess_data(df):
    """Enhanced data preprocessing pipeline"""
    logger.info("Starting data preprocessing...")
    
    # Clean all text fields
    text_cols = ['Research Title', 'Name of Faculty Researcher / Author', 
                'Title of Forum', 'Venue', 'Forum Type', 'Status of Research']
    for col in text_cols:
        df[col] = df[col].apply(clean_text)
    
    # Standardize status
    df['Status of Research'] = df['Status of Research'].apply(
        lambda x: 'Completed' if 'complete' in x.lower() 
        else 'Ongoing' if 'ongoing' in x.lower()
        else x.title()
    )
    
    # Process dates with enhanced validation
    date_cols = ['Date Started', 'Date of Completion', 'Date of Presentation']
    for col in date_cols:
        df[col] = df[col].apply(parse_complex_date)
        # Fill missing presentation dates with completion dates + 30 days
        if col == 'Date of Presentation' and df[col].isnull().any():
            df[col] = df[col].fillna(
                pd.to_datetime(df['Date of Completion']) + pd.Timedelta(days=30)
            )
    
    # Extract year from presentation date
    df['Year'] = pd.to_datetime(df['Date of Presentation']).dt.year.fillna(df['Year'])
    
    # Calculate research duration in days with validation
    df['Duration (days)'] = (
        pd.to_datetime(df['Date of Completion']) - 
        pd.to_datetime(df['Date Started'])
    ).dt.days
    # Handle negative durations
    df.loc[df['Duration (days)'] < 0, 'Duration (days)'] = None
    
    # Enhanced author processing
    df['Authors'] = df['Name of Faculty Researcher / Author'].apply(extract_authors)
    df['Author Count'] = df['Authors'].apply(len)
    df['Is Collaborative'] = df['Author Count'] > 1
    
    # Enhanced research categorization
    df['Research Category'] = df['Research Title'].apply(categorize_research)
    
    # Clean and standardize forum types
    df['Forum Type'] = df['Forum Type'].apply(
        lambda x: 'International' if re.search(r'international', x, re.IGNORECASE)
        else 'National' if re.search(r'national', x, re.IGNORECASE)
        else 'Regional' if re.search(r'regional', x, re.IGNORECASE)
        else 'Local' if re.search(r'local', x, re.IGNORECASE)
        else 'Other'
    )
    
    # Add additional derived fields
    df['Is International'] = df['Forum Type'] == 'International'
    df['Is Completed'] = df['Status of Research'] == 'Completed'
    
    logger.info("Data preprocessing completed")
    return df

def generate_analytics(df):
    """Enhanced analytics generation with more metrics"""
    logger.info("Generating analytics...")
    
    # Time series analysis
    time_series = {
        'publications_by_year': df['Year'].value_counts().sort_index().to_dict(),
        'international_publications': df[df['Is International']]
                               .groupby('Year').size().to_dict(),
        'completion_rate_by_year': df.groupby('Year')['Is Completed']
                               .mean().mul(100).round(1).to_dict()
    }
    
    # Collaboration metrics
    collaboration = {
        'avg_authors_by_year': df.groupby('Year')['Author Count'].mean().round(1).to_dict(),
        'collab_rate_by_year': df.groupby('Year')['Is Collaborative'].mean().mul(100).round(1).to_dict(),
        'top_collaborators': df.explode('Authors').groupby('Authors')['Is Collaborative']
                             .sum().sort_values(ascending=False).head(10).to_dict()
    }
    
    # Research impact metrics
    impact = {
        'categories': df['Research Category'].value_counts().to_dict(),
        'forum_types': df['Forum Type'].value_counts().to_dict(),
        'avg_duration': round(df['Duration (days)'].mean()),
        'median_duration': round(df['Duration (days)'].median()),
        'completion_status': df['Status of Research'].value_counts().to_dict(),
        'completion_rate': round(df['Is Completed'].mean() * 100, 1),
        'top_venues': df['Venue'].value_counts().head(10).to_dict()
    }
    
    # Department/Faculty analysis (assuming author prefixes indicate departments)
    faculty_mapping = {
        r'\b(eng|comp|tech|electr|mech)\b': 'Engineering',
        r'\b(med|health|nurs|pharm)\b': 'Health Sciences',
        r'\b(agri|fish|forest|vet)\b': 'Agriculture',
        r'\b(bus|econ|account|finan)\b': 'Business',
        r'\b(edu|teach|learn)\b': 'Education',
        r'\b(art|music|drama|design)\b': 'Arts',
        r'\b(law|legal)\b': 'Law',
        r'\b(sci|phys|chem|bio|math)\b': 'Sciences'
    }
    
    faculty_counts = defaultdict(int)
    for authors in df['Authors']:
        for author in authors:
            for pattern, faculty in faculty_mapping.items():
                if re.search(pattern, author, re.IGNORECASE):
                    faculty_counts[faculty] += 1
                    break
            else:
                faculty_counts['Other'] += 1
    
    impact['faculty_distribution'] = dict(faculty_counts)
    
    # Top researchers
    researchers = df.explode('Authors')
    top_researchers = {
        'by_publications': researchers.groupby('Authors').size()
                            .sort_values(ascending=False).head(10).to_dict(),
        'by_international': researchers[researchers['Is International']]
                            .groupby('Authors').size()
                            .sort_values(ascending=False).head(10).to_dict()
    }
    
    analytics = {
        'time_series': time_series,
        'collaboration': collaboration,
        'impact': impact,
        'researchers': top_researchers,
        'metadata': {
            'total_publications': len(df),
            'total_authors': researchers['Authors'].nunique(),
            'start_year': int(df['Year'].min()),
            'end_year': int(df['Year'].max())
        }
    }
    
    logger.info("Analytics generation completed")
    return analytics

def save_output(data, filename):
    """Enhanced output saving with validation"""
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        logger.info(f"Successfully saved output to {filename}")
        return True
    except Exception as e:
        logger.error(f"Failed to save output: {str(e)}")
        return False

def main():
    try:
        logger.info("Starting research data processing")
        
        # Load data with enhanced error handling
        try:
            df = pd.read_csv('research_raw.csv', encoding='utf-8', 
                           parse_dates=['Date Started', 'Date of Completion', 'Date of Presentation'],
                           dtype={'Year': 'Int64'})
            logger.info(f"Successfully loaded {len(df)} records")
        except Exception as e:
            logger.error(f"Failed to load CSV: {str(e)}")
            return
        
        # Validate data quality
        validate_data(df)
        
        # Preprocess data
        df_clean = preprocess_data(df)
        
        # Generate analytics
        analytics = generate_analytics(df_clean)
        
        # Prepare output
        output = {
            'metadata': {
                'processing_date': datetime.now().isoformat(),
                'records_processed': len(df_clean),
                'date_range': {
                    'start': df_clean['Date Started'].min(),
                    'end': df_clean['Date of Presentation'].max()
                },
                'data_sources': ['research_raw.csv']
            },
            'raw_data': df_clean.to_dict('records'),
            'analytics': analytics
        }
        
        # Save output
        if save_output(output, 'research_processed.json'):
            logger.info(f"Processing complete. Output saved to research_processed.json")
        else:
            logger.error("Processing completed with errors during output saving")
            
    except Exception as e:
        logger.error(f"Critical error in main processing: {str(e)}", exc_info=True)

if __name__ == "__main__":
    main()