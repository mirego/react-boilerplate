FROM node:11.13-alpine

WORKDIR /opt/app

RUN npm install -g serve

COPY package.json package-lock.json ./

COPY scripts ./scripts

RUN npm ci --no-audit --no-color --unsafe-perm

COPY . .

ENTRYPOINT ["./scripts/docker-entrypoint.sh"]
