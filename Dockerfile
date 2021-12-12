FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=1313       

EXPOSE ${PORT}

CMD [ "npm","run", "dev" ]