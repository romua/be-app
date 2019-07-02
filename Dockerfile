FROM node:10.16.0-alpine

WORKDIR /app

COPY be /app

RUN ls -la
