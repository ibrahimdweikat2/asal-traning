FROM node:20-alpine

WORKDIR /groca

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start"]