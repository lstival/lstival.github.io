#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Content Generator for Personal Website
Converts TSV files from markdown_generator to Pelican-compatible markdown pages.

This script reads publications.tsv and talks.tsv from the markdown_generator folder
and generates content for the personal website pages.
"""

import pandas as pd
import os
from datetime import datetime

# Paths
MARKDOWN_GENERATOR_PATH = r"C:\WUR\lstival.github.io\markdown_generator"
CONTENT_PATH = r"C:\WUR\personal_website\content\pages"

def html_escape(text):
    """Escape special characters for markdown/HTML."""
    if pd.isna(text):
        return ""
    html_escape_table = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return "".join(html_escape_table.get(c, c) for c in str(text))


def generate_publications_page():
    """Generate publications.md from publications.tsv"""
    print("Generating publications page...")
    
    # Read TSV file
    tsv_path = os.path.join(MARKDOWN_GENERATOR_PATH, "publications.tsv")
    if not os.path.exists(tsv_path):
        print(f"Warning: {tsv_path} not found. Skipping publications generation.")
        return
    
    pubs = pd.read_csv(tsv_path, sep="\t", header=0)
    
    # Start building the markdown content
    md = """Title: Publications
Slug: publications

# Publications

---

"""
    
    # Group by year (descending)
    pubs['year'] = pd.to_datetime(pubs['pub_date']).dt.year
    pubs = pubs.sort_values('pub_date', ascending=False)
    
    current_year = None
    for idx, pub in pubs.iterrows():
        year = pub['year']
        
        # Add year header if new year
        if year != current_year:
            md += f"\n## {year}\n\n"
            current_year = year
        
        # Add publication
        md += f"### {html_escape(pub['title'])}\n\n"
        md += f"**{html_escape(pub['venue'])}**\n\n"
        
        if pd.notna(pub['excerpt']) and len(str(pub['excerpt'])) > 5:
            md += f"{html_escape(pub['excerpt'])}\n\n"
        
        # Add links
        if pd.notna(pub['paper_url']) and len(str(pub['paper_url'])) > 5:
            md += f"[📄 Download PDF]({pub['paper_url']})\n\n"
        
        # Add citation
        if pd.notna(pub['citation']):
            md += f"##### Citation\n\n```\n{html_escape(pub['citation'])}\n```\n\n"
        
        md += "---\n\n"
    
    # Write to file
    output_path = os.path.join(CONTENT_PATH, "publications.md")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md)
    
    print(f"✓ Generated {output_path}")
    print(f"  Processed {len(pubs)} publications")


def generate_talks_page():
    """Generate a talks/presentations section (can be added to research-interests or separate page)"""
    print("Generating talks content...")
    
    # Read TSV file
    tsv_path = os.path.join(MARKDOWN_GENERATOR_PATH, "talks.tsv")
    if not os.path.exists(tsv_path):
        print(f"Warning: {tsv_path} not found. Skipping talks generation.")
        return
    
    talks = pd.read_csv(tsv_path, sep="\t", header=0)
    
    # Start building the markdown content
    md = """Title: Talks & Presentations
Slug: talks

# Talks & Presentations

---

"""
    
    # Sort by date (descending)
    talks['year'] = pd.to_datetime(talks['date']).dt.year
    talks = talks.sort_values('date', ascending=False)
    
    current_year = None
    for idx, talk in talks.iterrows():
        year = talk['year']
        
        # Add year header if new year
        if year != current_year:
            md += f"\n## {year}\n\n"
            current_year = year
        
        # Add talk
        md += f"### {html_escape(talk['title'])}\n\n"
        
        if pd.notna(talk['venue']):
            md += f"**{html_escape(talk['venue'])}**\n\n"
        
        if pd.notna(talk['location']):
            md += f"📍 {html_escape(talk['location'])}\n\n"
        
        if pd.notna(talk['talk_url']) and len(str(talk['talk_url'])) > 5:
            md += f"[🔗 View Talk]({talk['talk_url']})\n\n"
        
        if pd.notna(talk['description']) and len(str(talk['description'])) > 5:
            md += f"{html_escape(talk['description'])}\n\n"
        
        md += "---\n\n"
    
    # Write to file
    output_path = os.path.join(CONTENT_PATH, "talks.md")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md)
    
    print(f"✓ Generated {output_path}")
    print(f"  Processed {len(talks)} talks")


def update_about_page():
    """Update about page with current information"""
    print("Updating about page...")
    
    about_path = os.path.join(CONTENT_PATH, "about.md")
    
    # Read current about page
    if os.path.exists(about_path):
        with open(about_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # You can add logic here to update specific sections
        # For now, we'll just add a timestamp
        if "*Last updated:" not in content:
            content += f"\n\n---\n\n*Last updated: {datetime.now().strftime('%B %d, %Y')}*\n"
        
        with open(about_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {about_path}")


def main():
    """Main function to generate all content"""
    print("=" * 60)
    print("Personal Website Content Generator")
    print("=" * 60)
    print()
    
    # Check if paths exist
    if not os.path.exists(MARKDOWN_GENERATOR_PATH):
        print(f"Error: markdown_generator path not found: {MARKDOWN_GENERATOR_PATH}")
        return
    
    if not os.path.exists(CONTENT_PATH):
        print(f"Error: content path not found: {CONTENT_PATH}")
        return
    
    # Generate content
    generate_publications_page()
    print()
    generate_talks_page()
    print()
    update_about_page()
    
    print()
    print("=" * 60)
    print("✓ Content generation complete!")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Review the generated content in content/pages/")
    print("2. Customize the content as needed")
    print("3. Build the site with: pelican content -s pelicanconf.py")
    print()


if __name__ == "__main__":
    main()
