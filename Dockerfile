FROM node:8

WORKDIR /usr/src/app

RUN npm i -g nodemon
RUN npm i

EXPOSE 8080
CMD [ "npm", "start" ]
