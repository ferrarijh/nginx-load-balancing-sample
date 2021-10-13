FROM node:alpine
RUN mkdir app
WORKDIR /app
COPY . .
COPY volumes/magenta/styles.css public/stylesheets/styles.css
CMD ["node", "index.js"]