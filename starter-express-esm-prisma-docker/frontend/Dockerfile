FROM nginx:1.29-alpine

# Copy our custom nginx config to override default
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the static site
COPY index.html /usr/share/nginx/html/index.html

# expose port (informational)
EXPOSE 80

# default command of nginx image will run

