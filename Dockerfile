### stage: build ###
FROM node:8.16.2-alpine AS build

WORKDIR /
COPY package.json yarn.lock ./
COPY / /

RUN yarn install 


COPY tsconfig.json .

RUN yarn build

### stage: app ###
FROM nginx:1.15-alpine AS app

LABEL maintainer="ZengPing An<anzengping@momenta.ai>"
LABEL app=monaWebsite

COPY nginx/ /etc/nginx/

EXPOSE 80
