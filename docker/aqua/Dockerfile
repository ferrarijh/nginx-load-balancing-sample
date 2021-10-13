FROM node:alpine
RUN mkdir app
WORKDIR /app
COPY . .
COPY volumes/aqua/styles.css public/stylesheets/styles.css
CMD ["node", "index.js"]