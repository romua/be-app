FROM node:10-alpine

WORKDIR /app

COPY . /app

RUN ls -la

RUN npm install pm2 -g && cd be/ && npm install

EXPOSE 8080

