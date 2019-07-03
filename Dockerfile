FROM node:10-alpine

WORKDIR /app

COPY be /app/be

COPY fe /app/fe

RUN npm install pm2 -g && cd be/ && npm install && npm run build:prod

EXPOSE 8080

