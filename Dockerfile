FROM node:17-alpine

WORKDIR /app

COPY . .

EXPOSE 5173

RUN npm install