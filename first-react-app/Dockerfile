FROM node:20-alpine

WORKDIR /groca

COPY package.json .

COPY package-lock.json .

RUN npm install -g npm@9.8.1

RUN npm config set legacy-peer-deps true

RUN npm install --legacy-peer-deps

RUN npm install react-scripts --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD [ "npm","start"]