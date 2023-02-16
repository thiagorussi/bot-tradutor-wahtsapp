# Use the official Node.js image as the base image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

RUN apt-get update \
    && apt-get install -y wget gnupg 
    
RUN apt-get install -y libgbm-dev
    
RUN apt-get install chromium-browser

RUN npm install

# Expose the port the app runs in
EXPOSE 8080

# Define the entry point for the container
CMD ["npm", "start"]
