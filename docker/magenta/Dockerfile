FROM node:alpine
RUN mkdir app
WORKDIR /app
COPY . .
COPY docker/magenta/styles.css public/stylesheets/styles.css
CMD ["node", "index.js"]