import re

# Read content.md from brain directory using absolute path
path = r"C:\Users\offic\.gemini\antigravity-cli\brain\db2f9a10-8507-4628-bd77-5f8a7b455181\.system_generated\steps\10\content.md"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Find all image URLs in substack-post-media or substackcdn
urls = re.findall(r'https://substack-post-media\.s3\.amazonaws\.com/public/images/[a-f0-9\-]+_\d+x\d+\.(?:png|jpg|jpeg)', text)

# Deduplicate
unique_urls = list(dict.fromkeys(urls))
print("FOUND IMAGES:")
for u in unique_urls:
    print(u)
