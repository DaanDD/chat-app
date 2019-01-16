FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./app ./app

RUN npm i

EXPOSE 8080
CMD [ "npm", "start" ]
