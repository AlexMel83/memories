FROM node:16-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]