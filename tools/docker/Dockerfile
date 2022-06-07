FROM node:16 AS assets

WORKDIR /app

RUN yarn global add tailwindcss && mkdir -p /app/public/build && chown node:node -R /app/public/build

COPY --chown=node:node assets assets
COPY --chown=node:node run ./
COPY --chown=node:node templates templates

USER node

RUN ./run yarn:build:css

###

FROM php:8.1-fpm AS php-fpm

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /app

RUN apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends \
    git \
    unzip \
  && useradd --create-home build \
  && chown build:build -R /app

COPY --chown=build:build composer.* ./

USER build

RUN composer install

COPY --chown=build:build . .

###

FROM caddy:2 AS web

COPY tools/docker/web/root/ /

WORKDIR /app

COPY --from=assets /app/public/build public/build
COPY public public
