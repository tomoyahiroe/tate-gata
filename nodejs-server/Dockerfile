FROM node:lts-alpine3.17 

WORKDIR /app

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

EXPOSE 3000