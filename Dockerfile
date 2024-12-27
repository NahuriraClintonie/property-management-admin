# Stage 1: Build the React app
FROM node:20.17.0-alpine3.19 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Remove default Nginx static resources
RUN rm -rf /usr/share/nginx/html/*

# Copy the Vite build output (from the 'dist' folder) to Nginx static folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 to the outside world
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]