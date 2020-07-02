FROM node:14-alpine

WORKDIR /usr/src/re
# copy package.json into the container at /api
COPY package*.json /usr/src/re/

RUN npm install

COPY . /usr/src/re/

EXPOSE 8181

CMD ["npm", "start"]
