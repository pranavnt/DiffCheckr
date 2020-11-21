FROM node:10
 
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install 
 
# Copies everything over to Docker environment
COPY . .
 
EXPOSE 3000
 
CMD [ "yarn", "start" ]
