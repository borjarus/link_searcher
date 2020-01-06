FROM node:12-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV TIME_ZONE=Europe/Warsaw

RUN echo "Europe/Warsaw" > /etc/timezone

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install -g typescript && npm install -g concurrently \ 
&& npm install -g nodemon && npm install

#RUN npm run postinstall

EXPOSE 3000
CMD [ "npm", "start" ]
