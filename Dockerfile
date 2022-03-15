FROM node:alpine AS assets

RUN mkdir /node_modules \
  && chown node:node -R /node_modules

ENV PATH=${PATH}:/node_modules/.bin

RUN apk add --no-cache bash \
  && yarn global add tailwindcss

USER node

###

FROM php:8-cli-alpine AS composer

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

###

FROM opdavies/sculpin-serve:php-8.1-alpine AS web

# COPY --from=assets /app/dist /app
