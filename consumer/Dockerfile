FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent

COPY ./dist ./dist

CMD ["node", "dist/index.js"]