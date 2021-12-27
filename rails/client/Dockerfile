FROM node:17-alpine as client

ENV TZ Asia/Tokyo

WORKDIR /rails/client

COPY package.json yarn.lock ./
RUN yarn install

VOLUME ["/rails/client"]
