import json
import re
from bs4 import BeautifulSoup

json_file = r"C:\Users\offic\.gemini\antigravity-cli\brain\db2f9a10-8507-4628-bd77-5f8a7b455181\.system_generated\steps\118\content.md"

with open(json_file, "r", encoding="utf-8") as f:
    raw = f.read()

# Find JSON object start
json_str = raw[raw.find("{"):]
data = json.loads(json_str)

html_body = data["body_html"]
title = data["title"]
subtitle = data.get("subtitle", "")
post_date = data.get("post_date", "")
canonical_url = data.get("canonical_url", "")

soup = BeautifulSoup(html_body, "html.parser")

# Convert HTML elements to clean markdown
markdown_lines = []
markdown_lines.append("---")
markdown_lines.append('id: 550e8400-e29b-41d4-a716-446655440000')
markdown_lines.append(f'title: "{title}"')
markdown_lines.append('type: raw-source')
markdown_lines.append('status: captured')
markdown_lines.append('domain: ai')
markdown_lines.append('source_type: article')
markdown_lines.append('author: "Tech with Mak (@thecuriousmak)"')
markdown_lines.append(f'url: "{canonical_url}"')
markdown_lines.append('created: 2026-08-06')
markdown_lines.append('updated: 2026-08-06')
markdown_lines.append('schema_version: 4')
markdown_lines.append('tags:')
markdown_lines.append('  - article')
markdown_lines.append('  - web-clip')
markdown_lines.append('  - ai')
markdown_lines.append('  - ml')
markdown_lines.append('---\n')

markdown_lines.append(f"# {title}")
if subtitle:
    markdown_lines.append(f"### {subtitle}\n")
markdown_lines.append(f"**Author**: Tech with Mak (@thecuriousmak)  ")
markdown_lines.append(f"**Source URL**: {canonical_url}  ")
markdown_lines.append(f"**Date**: {post_date}\n")
markdown_lines.append("![Header Image](https://substack-post-media.s3.amazonaws.com/public/images/3797e221-46ba-4da7-b331-847e705c2563_1983x793.png)\n")
markdown_lines.append("---\n")

def process_element(elem):
    if elem.name is None:
        text = elem.string
        if text:
            return text
        return ""
    
    if elem.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
        level = int(elem.name[1])
        text = elem.get_text().strip()
        if text:
            return f"\n{'#' * level} {text}\n"
        return ""
    
    if elem.name == 'p':
        # Check inside p for images
        imgs = elem.find_all('img')
        res = []
        for img in imgs:
            src = img.get('src')
            alt = img.get('alt', 'Image')
            res.append(f"\n![{alt}]({src})\n")
        text = elem.get_text().strip()
        if text:
            res.append(f"\n{text}\n")
        return "".join(res)
    
    if elem.name == 'ul':
        items = []
        for li in elem.find_all('li', recursive=False):
            items.append(f"- {li.get_text().strip()}")
        return "\n" + "\n".join(items) + "\n"
        
    if elem.name == 'ol':
        items = []
        for idx, li in enumerate(elem.find_all('li', recursive=False), 1):
            items.append(f"{idx}. {li.get_text().strip()}")
        return "\n" + "\n".join(items) + "\n"
        
    if elem.name == 'blockquote':
        text = elem.get_text().strip()
        lines = [f"> {line}" for line in text.split('\n')]
        return "\n" + "\n".join(lines) + "\n"
        
    if elem.name == 'figure' or 'captioned-image-container' in elem.get('class', []):
        img = elem.find('img')
        if img:
            src = img.get('src')
            alt = img.get('alt', 'Infographic Diagram')
            return f"\n![{alt}]({src})\n"
        return ""
        
    if elem.name == 'hr':
        return "\n---\n"
        
    # Recursively process children
    res = []
    for child in elem.children:
        res.append(process_element(child))
    return "".join(res)

full_md_body = process_element(soup)

# Clean up duplicate newlines
full_md_body = re.sub(r'\n{3,}', '\n\n', full_md_body)

output_capture_path = r"C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\01_RAW\capture\the-aiml-engineer-interview-guide-for-2026-part-1.md"

final_content = "\n".join(markdown_lines) + full_md_body

with open(output_capture_path, "w", encoding="utf-8") as out:
    out.write(final_content)

print("SUCCESSFULLY WRITTEN FULL CAPTURE! Length:", len(final_content))
