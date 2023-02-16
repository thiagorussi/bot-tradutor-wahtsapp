# Use the official Node.js image as the base image
FROM node:12

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

# Expose the port the app runs in
EXPOSE 8080

# Define the entry point for the container
CMD ["npm", "start"]
