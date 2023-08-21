FROM node:20-alpine as builder

WORKDIR /groca

COPY package.json .

COPY package-lock.json .

RUN npm install -g npm@9.8.1

RUN npm install --legacy-peer-deps

RUN npm install react-scripts --legacy-peer-deps

COPY . .

EXPOSE 3000

RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html