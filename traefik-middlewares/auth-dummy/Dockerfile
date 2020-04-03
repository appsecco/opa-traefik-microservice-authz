FROM node:10.19-alpine3.9

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_PORT 80

CMD ["node", "app.js"]