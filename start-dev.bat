@echo off
echo Starting Gruhita Properties React Development Server...
echo.
echo If the server starts successfully, it will be available at:
echo http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.
node ./node_modules/vite/bin/vite.js --host 0.0.0.0 --port 5173
pause
