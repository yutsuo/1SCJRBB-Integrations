FROM node:current-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:current-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

COPY wait.sh .

RUN npm ci --production

COPY --from=builder /app/dist ./dist

CMD [ "node", "dist/index.js" ]