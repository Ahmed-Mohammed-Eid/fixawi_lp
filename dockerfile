# Use the official Node.js image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port the app runs on
EXPOSE 3050

# Set environment variable for production
ENV NODE_ENV=production

# Build the app for production
RUN npm run build

# Start the app
CMD ["npm", "run", "start"]