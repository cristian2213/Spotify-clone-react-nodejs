FROM node:alpine

WORKDIR /app

# SERVER DEPENDENCIES
COPY server/package*.json .
RUN npm install --omit=dev

# BIND SERVER CODE 
COPY server/dist .

RUN chown node client
RUN chown node storage
RUN chmod 777 storage

# SET USER
USER node

ARG PORT=8080

EXPOSE ${PORT}

CMD ["node", "main.js"]
