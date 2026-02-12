# Base image
FROM node:22-bullseye

# Set working directory
WORKDIR /app

# Environment variable
# Supaya Puppeteer tidak download Chromium sendiri
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install system dependencies + Google Chrome
RUN apt-get update && apt-get install -y 

# Copy dependency files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose application port
EXPOSE 3000

# Start application
# - Generate Prisma client sesuai arsitektur Linux
# - Build Next.js
# - Start production server
CMD npx prisma generate && npm run build && npm start