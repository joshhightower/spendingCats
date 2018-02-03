
FROM node:boron

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install
#RUN npm run build:prod

COPY . /usr/src/app

EXPOSE 8082

CMD ["npm", "start"]