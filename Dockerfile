# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Install Node.js dependencies
RUN npm ci

# Expose a port (if your Node.js app listens on a specific port)
EXPOSE 3000

# Build react app
RUN npm run build

# Install serve
RUN npm install -g serve

# Set the command to run the application
CMD ["serve", "-s", "build"]