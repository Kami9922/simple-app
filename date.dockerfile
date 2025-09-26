FROM node:18

COPY . .

RUN npm ci

COPY . .

CMD ["node", "date-service.js"]