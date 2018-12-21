FROM node:10.14-alpine

WORKDIR /opt/app

RUN npm install -g serve

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENTRYPOINT ["./scripts/docker-entrypoint.sh"]
