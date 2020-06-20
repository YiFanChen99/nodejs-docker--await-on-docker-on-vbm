FROM node:latest

RUN mkdir /app
WORKDIR /app

EXPOSE 8080
CMD [ "yarn", "start" ]
