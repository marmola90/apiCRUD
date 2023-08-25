FROM node:18-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig*.json ./

COPY . .

RUN npm install -g npm@9.8.1

RUN npm install pm2 -g

RUN npm install

#USER node
RUN npm run tsc

#COPY --chown=node:node . .

EXPOSE 3000 
CMD [ "npm", "run","dev" ]
#CMD [ "pm2-runtime", "build/server.js" ]