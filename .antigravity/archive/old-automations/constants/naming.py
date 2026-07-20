import re

KEBAB_CASE_PATTERN = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
MAX_FILENAME_LENGTH: int = 100
