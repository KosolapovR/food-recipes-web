FROM --platform=linux/x86_64 node:16-alpine

WORKDIR /usr/web
COPY package.json .

RUN rm -rf ./node_modules
RUN rm -rf ./package-lock.json

RUN npm install

COPY . /usr/cms




