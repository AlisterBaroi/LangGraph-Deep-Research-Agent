.PHONY: help dev-frontend dev-backend dev

help:
	@echo "Available commands:"
# http://localhost:5173
	@echo "  make dev-frontend    - Starts the frontend development server (Vite)"
# http://127.0.0.1:2024
	@echo "  make dev-backend     - Starts the backend development server (Uvicorn with reload)"
	@echo "  make dev             - Starts both frontend and backend development servers"

dev-frontend:
	@echo "Starting frontend development server..."
	@cd frontend && npm run dev

dev-backend:
	@echo "Starting backend development server..."
	@cd backend && langgraph dev

# Run frontend and backend concurrently
# http://localhost:5173/app
# sudo kill -9 `sudo lsof -t -i:5173`
# sudo kill -9 `sudo lsof -t -i:2024`
# `sudo lsof -t -i:5173`
# `sudo lsof -t -i:2024`

dev: 
	@echo "Starting both frontend and backend development servers..."
	@make dev-frontend & make dev-backend