# Build script for Piyush Wiki Monorepo
Write-Host "Building Piyush Wiki Frontend..." -ForegroundColor Cyan
npx pnpm --filter web build
