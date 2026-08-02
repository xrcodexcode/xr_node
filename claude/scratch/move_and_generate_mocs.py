import os
import shutil
import subprocess

src = r"C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\01_RAW\CAPTURE\How to Create $1M ARR company with Claude + 2nd Brain!!.md"
dst = r"C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\01_RAW\SOURCE\How to Create $1M ARR company with Claude + 2nd Brain!!.md"

if os.path.exists(src):
    shutil.move(src, dst)
    print("Successfully moved source file to 01_RAW/SOURCE/")
else:
    print("Source file already moved or not found:", src)

print("Running MOC generation automation...")
subprocess.run([r".\.venv\Scripts\python.exe", r"claude/automations/generate_mocs.py"], check=True)
