#   base image for react app
FROM  node:22.3.0-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# for build

# Build the application
RUN npm run build 

# Expose the port the app runs on
EXPOSE 5173

# Install a lightweight web server (e.g., serve) to serve the built application
RUN npm install -g serve

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "5173"]



#development

# EXPOSE 5173

# CMD ["npm", "run", "dev"]