import os
import glob
import time
import argparse
from google import genai
from google.genai import types

def main():
    parser = argparse.ArgumentParser(description='Fact-check atomic notes in the NODES directory.')
    parser.add_argument('--sample', type=int, help='Only process a sample of N files', default=0)
    args = parser.parse_args()

    vault_dir = r"C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb"
    nodes_dir = os.path.join(vault_dir, "NODES")
    reports_dir = os.path.join(vault_dir, "02_NEW-KNOWLEDGE")
    
    os.makedirs(reports_dir, exist_ok=True)
    report_path = os.path.join(reports_dir, "report.md")

    md_files = glob.glob(os.path.join(nodes_dir, "*.md"))
    if args.sample > 0:
        md_files = md_files[:args.sample]

    if not md_files:
        print("No files found in NODES directory.")
        return

    print(f"Found {len(md_files)} files. Starting fact-check...")

    # Initialize Gemini client
    try:
        client = genai.Client()
    except Exception as e:
        print(f"Failed to initialize Gemini client. Is GEMINI_API_KEY set? Error: {e}")
        return

    results = []

    for idx, filepath in enumerate(md_files):
        filename = os.path.basename(filepath)
        print(f"[{idx+1}/{len(md_files)}] Fact-checking: {filename}")
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            prompt = f"""
You are an expert fact-checker. Please analyze the following atomic note.
1. Extract the core factual claims.
2. Determine if the claims are True, False, Partially True, or Unverifiable based on general knowledge.
3. Provide a brief 1-sentence explanation.

Respond strictly in this format:
RESULT: [True / False / Partially True / Unverifiable]
EXPLANATION: [Your explanation]

Note text:
{content}
"""
            
            # Using flash lite or flash to be fast and cost-effective
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
                config=types.GenerateContentConfig(
                    temperature=0.0
                )
            )
            
            result_text = response.text
            
            # Simple parsing
            status = "Unverifiable"
            explanation = "Failed to parse response."
            
            for line in result_text.split('\n'):
                if line.startswith('RESULT:'):
                    status = line.replace('RESULT:', '').strip()
                elif line.startswith('EXPLANATION:'):
                    explanation = line.replace('EXPLANATION:', '').strip()
            
            results.append((filename, status, explanation))
            
            # Sleep slightly to avoid hitting rate limits too fast
            time.sleep(1)
            
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            results.append((filename, "Error", str(e)))

    # Write report
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# Fact Check Report\n\n")
        f.write("| Note | Status | Explanation |\n")
        f.write("|---|---|---|\n")
        for filename, status, explanation in results:
            # Escape pipes to avoid breaking the markdown table
            safe_explanation = explanation.replace('|', '/')
            f.write(f"| [[{filename.replace('.md', '')}]] | {status} | {safe_explanation} |\n")
            
    print(f"Fact-checking complete! Report generated at: {report_path}")

if __name__ == "__main__":
    main()
