FROM node:latest

WORKDIR /app

COPY package.json .

RUN if [ "NODE_ENV"="production" ]; \ 
    then npm install --production; \
    else npm install; \
    fi

COPY . .

# RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
#     -t robbyrussell \
#     -p 'history-substring-search'

ENV PORT=1313       

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]