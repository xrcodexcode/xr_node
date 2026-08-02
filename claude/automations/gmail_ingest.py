#!/usr/bin/env python3
"""
NexusDB Gmail & Newsletter Automated Ingestion Engine (Gmail API + OAuth2 + IMAP + Mock)
----------------------------------------------------------------------------------------
Automated ingestion script to fetch emails/newsletters from Gmail via official Gmail API,
IMAP, or Mock mode. Converts HTML emails to clean Markdown, attaches Schema v4 Frontmatter,
and deposits the result into 01_RAW/CAPTURE/.

Usage Modes:

  1. Gmail OAuth2 API Mode (Official Google Cloud Project):
     python claude/automations/gmail_ingest.py --oauth --credentials credentials.json --query "label:nexus-capture"

  2. Dry Run / Mock Mode (For Demos & Tests):
     python claude/automations/gmail_ingest.py --mock

  3. IMAP Mode (Using Gmail App Password):
     python claude/automations/gmail_ingest.py --email "user@gmail.com" --password "app_password" --label "nexus-capture"
"""

import os
import re
import sys
import uuid
import base64
import hashlib
import datetime
import argparse
import imaplib
import email
from email.header import decode_header
from pathlib import Path

# Enforce UTF-8 encoding for Windows standard output
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# Optional BeautifulSoup import for HTML cleaning
try:
    from bs4 import BeautifulSoup
    BS4_AVAILABLE = True
except ImportError:
    BS4_AVAILABLE = False

# Optional Google API imports
GMAIL_API_AVAILABLE = False
try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build
    GMAIL_API_AVAILABLE = True
except ImportError:
    GMAIL_API_AVAILABLE = False

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']


def sanitize_filename(text: str) -> str:
    """Convert string to safe filename."""
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    text = re.sub(r'[-\s]+', '_', text)
    return text[:60] if text else "untitled_email"


def clean_html_to_markdown(html_content: str) -> str:
    """Convert HTML email body into clean Markdown, stripping tracking pixels & ad noise."""
    if BS4_AVAILABLE:
        soup = BeautifulSoup(html_content, "html.parser")

        for element in soup(["script", "style", "footer", "head", "iframe"]):
            element.decompose()

        for img in soup.find_all("img"):
            width = img.get("width", "")
            height = img.get("height", "")
            if width == "1" or height == "1" or "tracking" in img.get("src", "").lower():
                img.decompose()

        for h1 in soup.find_all("h1"):
            h1.replace_with(f"\n# {h1.get_text().strip()}\n")
        for h2 in soup.find_all("h2"):
            h2.replace_with(f"\n## {h2.get_text().strip()}\n")
        for h3 in soup.find_all("h3"):
            h3.replace_with(f"\n### {h3.get_text().strip()}\n")
        for p in soup.find_all("p"):
            p.replace_with(f"\n{p.get_text().strip()}\n")
        for li in soup.find_all("li"):
            li.replace_with(f"\n- {li.get_text().strip()}")
        for a in soup.find_all("a"):
            text = a.get_text().strip()
            href = a.get("href", "#")
            if "unsubscribe" not in text.lower() and "preferences" not in text.lower():
                a.replace_with(f"[{text}]({href})")
            else:
                a.decompose()

        text = soup.get_text()
    else:
        text = re.sub(r'<style.*?</style>', '', html_content, flags=re.DOTALL)
        text = re.sub(r'<script.*?</script>', '', html_content, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', '\n', text)

    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    return text


def build_frontmatter(title: str, sender: str, date_str: str, content: str) -> str:
    """Generate Schema v4 compliant YAML frontmatter for raw email capture."""
    note_id = str(uuid.uuid4())
    content_hash = hashlib.sha256(content.encode('utf-8')).hexdigest()[:16]
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()

    frontmatter = f"""---
id: "{note_id}"
title: "{title}"
type: "literature-note"
status: "draft"
created: "{now_iso}"
modified: "{now_iso}"
review: ""
confidence: 50
tags:
  - raw
  - newsletter
  - email-ingest
owner_moc: ""
source:
  type: "gmail-api"
  sender: "{sender}"
  date: "{date_str}"
  content_hash: "{content_hash}"
---

# {title}

**Source:** Email from `{sender}`  
**Ingested Date:** {now_iso}  

---

## [Ingested Email Body]

{content}
"""
    return frontmatter


def run_gmail_oauth_ingestion(credentials_file: str, query_str: str, target_dir: Path):
    """Ingest emails via official Gmail API using OAuth2 credentials."""
    if not GMAIL_API_AVAILABLE:
        print("[ERROR] Google Client Libraries not installed.", file=sys.stderr)
        print("Please install them using: pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib", file=sys.stderr)
        sys.exit(1)

    creds = None
    token_path = Path("token.json")

    if token_path.exists():
        creds = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(credentials_file):
                print(f"[ERROR] OAuth client secrets file '{credentials_file}' not found.", file=sys.stderr)
                print("Download credentials.json from Google Cloud Console (APIs & Services > Credentials).", file=sys.stderr)
                sys.exit(1)

            os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
            os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '1'
            flow = InstalledAppFlow.from_client_secrets_file(credentials_file, SCOPES)
            try:
                creds = flow.run_local_server(port=0, open_browser=True)
            except Exception as e:
                print(f"[WARNING] Local server auth failed ({e}). Falling back to authorization link...", file=sys.stderr)
                auth_url, _ = flow.authorization_url(prompt='consent', access_type='offline')
                print(f"\nPlease open this link in your browser:\n{auth_url}\n")
                auth_resp = input("After authorizing, paste the full redirect URL or authorization code here: ").strip()
                if "code=" in auth_resp:
                    from urllib.parse import urlparse, parse_qs
                    parsed = parse_qs(urlparse(auth_resp).query)
                    code = parsed.get("code", [auth_resp])[0]
                else:
                    code = auth_resp
                flow.fetch_token(code=code)
                creds = flow.credentials



        with open(token_path, "w") as token_file:
            token_file.write(creds.to_json())

    try:
        service = build("gmail", "v1", credentials=creds)
        print(f"[GMAIL API] Executing query: '{query_str}'...")

        results = service.users().messages().list(userId="me", q=query_str).execute()
        messages = results.get("messages", [])

        if not messages:
            print(f"[INFO] No emails found matching query '{query_str}'.")
            return

        print(f"[INFO] Found {len(messages)} email(s). Fetching details...")
        target_dir.mkdir(parents=True, exist_ok=True)
        count = 0

        for msg_meta in messages:
            msg = service.users().messages().get(userId="me", id=msg_meta["id"], format="full").execute()
            headers = msg.get("payload", {}).get("headers", [])

            subject = "No Subject"
            sender = "Unknown Sender"
            date_str = ""

            for h in headers:
                name = h.get("name", "").lower()
                if name == "subject":
                    subject = h.get("value", "")
                elif name == "from":
                    sender = h.get("value", "")
                elif name == "date":
                    date_str = h.get("value", "")

            # Extract Body
            payload = msg.get("payload", {})
            parts = payload.get("parts", [])
            body_data = ""

            if not parts and "body" in payload:
                body_data = payload["body"].get("data", "")
            else:
                for p in parts:
                    if p.get("mimeType") in ["text/html", "text/plain"]:
                        body_data = p.get("body", {}).get("data", "")
                        if p.get("mimeType") == "text/html":
                            break

            if body_data:
                body_bytes = base64.urlsafe_b64decode(body_data)
                body_text = body_bytes.decode("utf-8", errors="ignore")
            else:
                body_text = msg.get("snippet", "No body preview available")

            clean_body = clean_html_to_markdown(body_text)
            fm_content = build_frontmatter(subject, sender, date_str, clean_body)

            fname = f"gmail_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}_{sanitize_filename(subject)}.md"
            out_path = target_dir / fname
            out_path.write_text(fm_content, encoding="utf-8")
            print(f"  └─ Saved: {out_path.name}")
            count += 1

        print(f"[SUCCESS] Ingested {count} email(s) via Gmail API into 01_RAW/CAPTURE/")

    except Exception as e:
        print(f"[ERROR] Gmail API Error: {e}", file=sys.stderr)
        sys.exit(1)


def run_mock_ingestion(target_dir: Path):
    """Generate mock email data for testing & PBL demonstration."""
    print("[MOCK MODE] Simulating Gmail Newsletter Ingestion...")

    mock_emails = [
        {
            "subject": "TLDR Tech: Autonomous AI Agents & Vector DBs",
            "sender": "dan@tldr.tech",
            "date": "2026-07-31 08:30:00",
            "html": """
            <h1>TLDR Tech Newsletter</h1>
            <p>Welcome to today's issue on Autonomous AI Knowledge Systems.</p>
            <h2>AI Agents replacing traditional databases</h2>
            <p>Recent benchmarks show flat atomic note structures outperforming deep hierarchical folders when used with Retrieval Augmented Generation (RAG).</p>
            """
        },
        {
            "subject": "ByteByteGo: System Architecture of Modern Second Brains",
            "sender": "alex@bytebytego.com",
            "date": "2026-07-31 10:15:00",
            "html": """
            <h1>System Design Digest</h1>
            <p>Why Zettelkasten + MOC is the future of personal knowledge graphs.</p>
            """
        }
    ]

    target_dir.mkdir(parents=True, exist_ok=True)
    count = 0

    for item in mock_emails:
        clean_text = clean_html_to_markdown(item["html"])
        fm_content = build_frontmatter(item["subject"], item["sender"], item["date"], clean_text)
        filename = f"email_{datetime.datetime.now().strftime('%Y%m%d')}_{sanitize_filename(item['subject'])}.md"
        out_path = target_dir / filename

        out_path.write_text(fm_content, encoding="utf-8")
        print(f"  └─ Saved: {out_path.relative_to(target_dir.parent.parent)}")
        count += 1

    print(f"[SUCCESS] Successfully ingested {count} mock email(s) into 01_RAW/CAPTURE/")


def run_imap_ingestion(email_user: str, email_pass: str, label: str, target_dir: Path):
    """Ingest emails via standard IMAP protocol."""
    print(f"[CONNECT] Connecting to Gmail IMAP for {email_user}...")
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(email_user, email_pass)
        
        status, _ = mail.select(label)
        if status != "OK":
            print(f"[WARN] Label '{label}' not found. Defaulting to INBOX.")
            mail.select("INBOX")

        status, messages = mail.search(None, "UNSEEN")
        email_ids = messages[0].split()

        if not email_ids:
            print("[INFO] No new unread capture emails found.")
            return

        print(f"[INFO] Found {len(email_ids)} unread email(s)...")
        target_dir.mkdir(parents=True, exist_ok=True)
        count = 0

        for e_id in email_ids:
            _, msg_data = mail.fetch(e_id, "(RFC822)")
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding or "utf-8")
                    sender = msg.get("From", "Unknown Sender")
                    date_str = msg.get("Date", "")

                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            if content_type == "text/html":
                                body = part.get_payload(decode=True).decode()
                                break
                            elif content_type == "text/plain":
                                body = part.get_payload(decode=True).decode()
                    else:
                        body = msg.get_payload(decode=True).decode()

                    clean_body = clean_html_to_markdown(body) if body else "Empty email body"
                    fm_content = build_frontmatter(subject, sender, date_str, clean_body)

                    fname = f"email_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}_{sanitize_filename(subject)}.md"
                    out_path = target_dir / fname
                    out_path.write_text(fm_content, encoding="utf-8")
                    print(f"  └─ Saved: {out_path.name}")
                    count += 1

        mail.logout()
        print(f"[SUCCESS] Successfully ingested {count} email(s).")

    except Exception as e:
        print(f"[ERROR] IMAP Error: {e}", file=sys.stderr)
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="NexusDB Gmail Ingestion Automation Engine")
    parser.add_argument("--oauth", action="store_true", help="Use Gmail OAuth2 API mode")
    parser.add_argument("--credentials", type=str, default="credentials.json", help="Path to Google Cloud OAuth credentials.json")
    parser.add_argument("--query", type=str, default="label:nexus-capture", help="Gmail API search query (e.g. 'label:nexus-capture' or 'is:unread')")
    parser.add_argument("--mock", action="store_true", help="Run mock ingestion for testing/demo")
    parser.add_argument("--email", type=str, help="Gmail Address for IMAP mode")
    parser.add_argument("--password", type=str, help="Gmail App Password for IMAP mode")
    parser.add_argument("--label", type=str, default="INBOX", help="Gmail IMAP Label to scan")
    parser.add_argument("--out-dir", type=str, default="01_RAW/CAPTURE", help="Output directory")

    args = parser.parse_args()

    vault_root = Path(__file__).resolve().parent.parent.parent
    target_dir = vault_root / args.out_dir

    if args.oauth:
        run_gmail_oauth_ingestion(args.credentials, args.query, target_dir)
    elif args.email and args.password:
        run_imap_ingestion(args.email, args.password, args.label, target_dir)
    else:
        run_mock_ingestion(target_dir)


if __name__ == "__main__":
    main()
