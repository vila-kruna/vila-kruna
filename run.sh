#!/bin/bash

# Configuration
PORT=8000
DIRECTORY="/home/bogdan_kocic/projects/frenki-kruna"

# Colors for premium terminal UI
GREEN='\033[0;32m'
CYAN='\033[0;36m'
GOLD='\033[0;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m' # No Color

clear
echo -e "${GOLD}${BOLD}======================================================${NC}"
echo -e "${GOLD}${BOLD}             Vila Kruna - WSL Web Server              ${NC}"
echo -e "${GOLD}${BOLD}======================================================${NC}"
echo ""

# 1. Kill any existing process on the port to prevent "Address already in use" errors
if command -v fuser >/dev/null 2>&1; then
    echo -e "${CYAN}[System]${NC} Checking for active processes on port $PORT..."
    fuser -k $PORT/tcp >/dev/null 2>&1
fi

# 2. Find the WSL IP address
WSL_IP=$(hostname -I | awk '{print $1}')

# 3. Choose the best server available
if command -v python3 >/dev/null 2>&1; then
    SERVER_CMD="python3 -m http.server $PORT"
elif command -v python >/dev/null 2>&1; then
    SERVER_CMD="python -m SimpleHTTPServer $PORT"
elif command -v npx >/dev/null 2>&1; then
    SERVER_CMD="npx serve -l $PORT"
else
    echo -e "${RED}[Error] No web server (Python or Node) found on your system!${NC}"
    exit 1
fi

# 4. Display beautiful connection instructions
echo -e "${GREEN}${BOLD}[Success] Web server is starting up!${NC}"
echo -e "To view the website in your Windows browser, use one of these links:"
echo ""
echo -e "  ${BOLD}Local Link:${NC}      ${CYAN}${BOLD}http://localhost:$PORT${NC}"
if [ ! -z "$WSL_IP" ]; then
    echo -e "  ${BOLD}WSL IP Link:${NC}     ${CYAN}${BOLD}http://$WSL_IP:$PORT${NC}"
fi
echo ""
echo -e "${GOLD}------------------------------------------------------${NC}"
echo -e "Press ${RED}${BOLD}Ctrl + C${NC} to stop the server at any time."
echo -e "${GOLD}------------------------------------------------------${NC}"
echo ""

# 5. Run the server in the workspace directory
cd "$DIRECTORY" || exit
eval "$SERVER_CMD"
