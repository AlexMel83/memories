FROM node:21-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm cache clean --force && npm ci --loglevel=error
COPY . .
CMD ["npm", "start"]