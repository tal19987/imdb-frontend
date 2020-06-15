# Uses Node.js 12
FROM node as build

# Changes the directory to /app
WORKDIR /app

# Copy the files, except for the ones specefied in .dockerignore
COPY . . 

# Installs all dependencies
RUN npm install --loglevel=error

# Production build
RUN npm run build

###

# Creates the nginx server
FROM nginx:alpine

# Copies the build directory to Nginx image
COPY --from=build /app/build /var/www/html/build/

# Removes the default configuration
RUN rm -f /etc/nginx/nginx.conf

# Copies my configuration to the image
COPY nginx.conf /etc/nginx/nginx.conf

# Exposes port 80
EXPOSE 80

# Tells the nginx to work in the background. Best practice for docker 
CMD ["nginx", "-g", "daemon off;"]