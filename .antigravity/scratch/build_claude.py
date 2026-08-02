import os
import shutil

script_dir = os.path.dirname(os.path.abspath(__file__))
vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
antigravity_dir = os.path.join(vault_root, ".antigravity")
claude_dot_dir = os.path.join(vault_root, ".claude")
claude_dir = os.path.join(vault_root, "claude")

def process_file(src_path, dst_path, is_dot=True):
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    target_folder_name = ".claude" if is_dot else "claude"
    
    try:
        with open(src_path, "r", encoding="utf-8") as f:
            content = f.read()
    except UnicodeDecodeError:
        shutil.copy2(src_path, dst_path)
        return

    content = content.replace(".antigravity", target_folder_name)
    content = content.replace("GEMINI.md", "CLAUDE.md")
    content = content.replace("cloud_antigravity", "anthropic_claude")
    content = content.replace("Antigravity Control Plane", "Claude Control Plane")
    content = content.replace("Antigravity", "Claude")
    content = content.replace('"agent_name": "antigravity"', '"agent_name": "claude"')
    content = content.replace(
        '"gemini-3.6-flash",\n      "gemini-3.6-pro",\n      "gemini-3.0-flash",\n      "gemini-3.0-pro"',
        '"claude-3-7-sonnet",\n      "claude-3-5-sonnet",\n      "claude-3-5-haiku",\n      "claude-3-opus"'
    )
    content = content.replace("gemini-3.6-flash", "claude-3-7-sonnet")

    with open(dst_path, "w", encoding="utf-8") as f:
        f.write(content)

for root, dirs, files in os.walk(antigravity_dir):
    if "__pycache__" in root:
        continue
    for f in files:
        src_file = os.path.join(root, f)
        rel_path = os.path.relpath(src_file, antigravity_dir)
        
        dst_file_dot = os.path.join(claude_dot_dir, rel_path)
        process_file(src_file, dst_file_dot, is_dot=True)
        
        dst_file_plain = os.path.join(claude_dir, rel_path)
        process_file(src_file, dst_file_plain, is_dot=False)

# Build CLAUDE.md and claude.md at vault root
gemini_md_path = os.path.join(vault_root, "GEMINI.md")
claude_md_path = os.path.join(vault_root, "CLAUDE.md")
claude_md_lower_path = os.path.join(vault_root, "claude.md")

if os.path.exists(gemini_md_path):
    with open(gemini_md_path, "r", encoding="utf-8") as f:
        g_content = f.read()
    
    c_content = g_content.replace("GEMINI.md", "CLAUDE.md")
    c_content = c_content.replace(".antigravity", ".claude")
    c_content = c_content.replace("cloud_antigravity", "anthropic_claude")
    c_content = c_content.replace("Antigravity Control Plane", "Claude Control Plane")
    c_content = c_content.replace("Antigravity", "Claude")

    with open(claude_md_path, "w", encoding="utf-8") as f:
        f.write(c_content)
    
    with open(claude_md_lower_path, "w", encoding="utf-8") as f:
        f.write(c_content)

print("Successfully created .claude, claude control plane folders, CLAUDE.md, and claude.md.")
