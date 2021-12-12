FROM node:latest

WORKDIR /app

COPY package.json .

RUN if [ "NODE_ENV"="production" ]; \ 
    then npm install --production; \
    else npm install; \
    fi

COPY . .

ENV PORT=1313       

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]