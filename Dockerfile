FROM node:10.10.0

WORKDIR /tableItReviewsProxy

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
