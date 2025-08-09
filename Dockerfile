FROM node:18-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Installing app dependencies
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000