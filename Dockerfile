### stage: build ###
FROM artifactory.momenta.works/docker/node:lts-alpine AS builder

WORKDIR /

COPY package.json yarn.lock ./

RUN  yarn config set registry https://artifactory.momenta.works/artifactory/api/npm/npm/ \  

  && yarn install 

COPY . /

RUN yarn build

### stage: app ###
FROM nginx:alpine AS app

LABEL maintainer="ZengPing An<anzengping@momenta.ai>"

LABEL app=monaWebsite

COPY nginx/ /etc/nginx/

COPY  --from=builder dist/ /usr/share/nginx/html

EXPOSE 80
