FROM node:latest AS deps
RUN npm install -g --arch=x64 --platform=linux sharp

FROM node:latest AS base

ENV APP_NAME=consumer-landingpages-webapp

WORKDIR /app

COPY package.json package.json
COPY .next/standalone .
COPY .next/static .next/static
COPY public public

COPY --from=deps /usr/local/lib/node_modules/sharp /app/node_modules/sharp

ENV NODE_ENV=production
ENV NODE_OPTIONS=--enable-source-maps

# set port for Next.js app
EXPOSE 3000

CMD [ "node", "server.js"]
