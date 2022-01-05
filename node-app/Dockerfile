FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# copy the generated modules and all other files to the container
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]