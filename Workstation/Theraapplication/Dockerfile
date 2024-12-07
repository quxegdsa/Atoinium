# Use an official Node.js runtime as a parent image
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Android SDK and other dependencies
RUN apt-get update && apt-get install -y openjdk-8-jdk wget unzip && \
    wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -O sdk-tools-linux.zip && \
    mkdir -p /usr/local/android-sdk-linux && \
    unzip sdk-tools-linux.zip -d /usr/local/android-sdk-linux && \
    rm sdk-tools-linux.zip && \
    yes | /usr/local/android-sdk-linux/tools/bin/sdkmanager --licenses && \
    /usr/local/android-sdk-linux/tools/bin/sdkmanager "platform-tools" "platforms;android-29" "build-tools;29.0.3"

# Set environment variables for Android SDK
ENV ANDROID_HOME /usr/local/android-sdk-linux
ENV PATH $ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH

# Expose the port the app runs on
EXPOSE 8081

# Start the app
CMD ["npm", "start"]