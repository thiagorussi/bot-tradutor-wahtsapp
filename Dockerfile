# Use the official Node.js image as the base image
FROM node:12

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

RUN apt-get update \
    && apt-get install -y wget gnupg 
RUN apt-get upgrade
RUN apt-get update
RUN apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

RUN apt-get install -y libgbm-dev
RUN apt-get install libglib2.0-0
    
RUN apt-get install chromium-browser

RUN npm install

# Expose the port the app runs in
EXPOSE 8080

# Define the entry point for the container
CMD ["npm", "start"]
