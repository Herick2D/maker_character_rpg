FROM node:20.9.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json .

RUN npm install --only=production

COPY . .

ENTRYPOINT ["npm", "run", "dev"]
