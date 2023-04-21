# Stage 0 - Build Front-end assets
FROM node:19 as build

WORKDIR /yuka-app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /yuka-app/build /usr/share/nginx/html
