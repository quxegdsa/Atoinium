# Stage 1: Build React frontend
FROM node:14 AS frontend-builder
WORKDIR /app/frontend
COPY atoiniumwebapp/package.json atoiniumwebapp/package-lock.json ./
RUN npm install
COPY atoiniumwebapp/ ./
RUN npm run build

# Stage 2: Build Python backend
FROM python:3.9 AS backend-builder
WORKDIR /app/backend
COPY atoiniumhpc/requirements.txt ./
RUN pip install --default-timeout=100 -r requirements.txt
COPY atoiniumhpc/ ./

# Stage 3: Combine frontend and backend
FROM python:3.9
WORKDIR /app
COPY --from=frontend-builder /app/frontend/build ./frontend/build
COPY --from=backend-builder /app/backend ./
CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8000"]