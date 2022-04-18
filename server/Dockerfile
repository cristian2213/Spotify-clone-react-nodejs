FROM node

WORKDIR /app

COPY package*.json .

RUN npm run install

COPY dist/* .

EXPOSE 8080

CMD [ "npm", "run" ]

