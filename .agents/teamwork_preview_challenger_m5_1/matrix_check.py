import os

VAULT_ROOT = r"c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb"

nodes = [
    "Capital Abundance Trap.md",
    "Channel Stuffing Vulnerability.md",
    "Inverted Power Hierarchy.md",
    "Perfectionism Execution Trap.md",
    "Working Code Paradigm.md"
]

print("--- CROSS-LINKING MATRIX OF ATOMIC NODES ---")
for n1 in nodes:
    p1 = os.path.join(VAULT_ROOT, "NODES", n1)
    with open(p1, 'r', encoding='utf-8') as f:
        c1 = f.read()
    print(f"\nNode: {n1[:-3]}")
    for n2 in nodes:
        if n1 == n2:
            continue
        link_target = n2[:-3]
        has_link = link_target in c1
        print(f"  -> Links to {link_target}: {has_link}")
