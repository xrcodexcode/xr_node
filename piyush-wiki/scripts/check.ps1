# Quality check script (TypeCheck & Linting)
Write-Host "Running Type Checks..." -ForegroundColor Yellow
npx pnpm --recursive run typecheck

Write-Host "Running Backend Pytest..." -ForegroundColor Yellow
python -m pytest backend/tests
