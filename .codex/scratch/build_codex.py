import os
import shutil

script_dir = os.path.dirname(os.path.abspath(__file__))
vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
antigravity_dir = os.path.join(vault_root, ".codex")
codex_dot_dir = os.path.join(vault_root, ".codex")
codex_dir = os.path.join(vault_root, "codex")

def process_file(src_path, dst_path, is_dot=True):
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    target_folder_name = ".codex" if is_dot else "codex"
    
    try:
        with open(src_path, "r", encoding="utf-8") as f:
            content = f.read()
    except UnicodeDecodeError:
        shutil.copy2(src_path, dst_path)
        return

    content = content.replace(".codex", target_folder_name)
    content = content.replace("CODEX.md", "CODEX.md")
    content = content.replace("openai_codex", "openai_codex")
    content = content.replace("Codex Control Plane", "Codex Control Plane")
    content = content.replace("Codex", "Codex")
    content = content.replace('"agent_name": "codex"', '"agent_name": "codex"')
    content = content.replace(
        '"gpt-5.6-turbo",\n      "gemini-3.6-pro",\n      "gemini-3.0-flash",\n      "gemini-3.0-pro"',
        '"gpt-5.6-turbo",\n      "gpt-5.6",\n      "gpt-5.5-turbo",\n      "gpt-5.5",\n      "gpt-4o",\n      "o3-mini",\n      "o1"'
    )
    content = content.replace("gpt-5.6-turbo", "gpt-5.6-turbo")

    with open(dst_path, "w", encoding="utf-8") as f:
        f.write(content)

for root, dirs, files in os.walk(antigravity_dir):
    if "__pycache__" in root:
        continue
    for f in files:
        src_file = os.path.join(root, f)
        rel_path = os.path.relpath(src_file, antigravity_dir)
        
        dst_file_dot = os.path.join(codex_dot_dir, rel_path)
        process_file(src_file, dst_file_dot, is_dot=True)
        
        dst_file_plain = os.path.join(codex_dir, rel_path)
        process_file(src_file, dst_file_plain, is_dot=False)

# Build CODEX.md and codex.md at vault root
gemini_md_path = os.path.join(vault_root, "CODEX.md")
codex_md_path = os.path.join(vault_root, "CODEX.md")
codex_md_lower_path = os.path.join(vault_root, "codex.md")

if os.path.exists(gemini_md_path):
    with open(gemini_md_path, "r", encoding="utf-8") as f:
        g_content = f.read()
    
    c_content = g_content.replace("CODEX.md", "CODEX.md")
    c_content = c_content.replace(".codex", ".codex")
    c_content = c_content.replace("openai_codex", "openai_codex")
    c_content = c_content.replace("Codex Control Plane", "Codex Control Plane")
    c_content = c_content.replace("Codex", "Codex")

    with open(codex_md_path, "w", encoding="utf-8") as f:
        f.write(c_content)
    
    with open(codex_md_lower_path, "w", encoding="utf-8") as f:
        f.write(c_content)

print("Successfully created .codex, codex control plane folders, CODEX.md, and codex.md.")
