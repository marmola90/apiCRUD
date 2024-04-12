FROM node:18-alpine as builder

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig*.json ./

COPY . .

RUN npm install -g npm@9.8.1
#RUN npm install pm2 -g

RUN npm install

#USER node
RUN npm run tsc

#EXPOSE 3000 
#RUN npm install pm2 -g

#EXPOSE 3000 
#CMD [ "npm", "run","start" ]
#CMD [ "pm2-runtime", "build/server.js" ]

FROM node:18-alpine

WORKDIR /home/node/app

COPY --from=builder /home/node/app/build ./build
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/node_modules ./node_modules
COPY --from=builder /home/node/app/package*.json ./
COPY --from=builder /home/node/app/.env ./

EXPOSE 3000 
CMD [ "node", "build/server.js" ]
#CMD [ "pm2-runtime", "build/server.js" ]