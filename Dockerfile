# Reference : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:16.1.0-alpine as dev

WORKDIR /languageConvo/app

COPY package*.json ./

RUN npm install

RUN npm i -g @nestjs/cli

COPY . .


EXPOSE 8080 

CMD [ "node" , "dist/main" ]