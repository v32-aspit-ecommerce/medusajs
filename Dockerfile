FROM node:20.11.0-alpine

WORKDIR /app/medusa

COPY package.json .
COPY deploy.sh .
COPY medusa-config.js .

RUN npm install
RUN npm install -g @medusajs/medusa-cli@latest

COPY . .

# RUN npm run build:admin
RUN npm run build
ENTRYPOINT [ "sh", "./deploy.sh"]