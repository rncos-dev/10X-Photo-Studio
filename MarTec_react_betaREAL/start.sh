#!/bin/bash

# Get the current directory where the script is located
scriptPath=$(dirname "$(readlink -f "$0")")

# Command for backend
backendCommand="cd $scriptPath/backend && source venvREAL/bin/activate && python manage.py runserver 0.0.0.0:8000"

# Command for frontend
frontendCommand="cd $scriptPath/frontend && npm run dev"

# Run backend in the background
echo "Starting Django backend..."
eval $backendCommand &

# Run frontend
echo "Starting React frontend..."
eval $frontendCommand
