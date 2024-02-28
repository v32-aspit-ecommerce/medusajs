FROM node:20.11.0-alpine

WORKDIR /app/medusa

COPY package.json .
COPY deploy.sh .
COPY medusa-config.js .

COPY . .

RUN npm install
RUN npm install -g @medusajs/medusa-cli@latest
# RUN npm install dotenv
# RUN npm install @medusajs/admin
# RUN npm install medusa-plugin-sendgrid



# RUN npm run build:admin
RUN npm run build
ENTRYPOINT [ "sh", "./deploy.sh"]