FROM node:15.4.0

WORKDIR /app

COPY dist /app/

RUN npm install -g serve

CMD ["serve", "-s", "/app"]
