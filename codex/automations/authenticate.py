#!/usr/bin/env python3
import os
import sys
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def main():
    if not os.path.exists("credentials.json"):
        print("[ERROR] credentials.json not found in current directory.", file=sys.stderr)
        sys.exit(1)

    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '1'

    print("Initializing Google OAuth flow...")
    flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
    
    try:
        creds = flow.run_local_server(port=8080, open_browser=True)
    except Exception as e:
        print(f"[NOTE] Local server port fallback: {e}")
        creds = flow.run_local_server(port=0, open_browser=True)

    with open("token.json", "w") as token_file:
        token_file.write(creds.to_json())

    print("\n[SUCCESS] Gmail authorization complete! 'token.json' saved successfully.")

if __name__ == "__main__":
    main()
