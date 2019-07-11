FROM node:12.6-slim

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/
RUN npm install
COPY webpack.config.js /code/

# Bundle app source
COPY ./src /code/src

EXPOSE 8080
CMD [ "./node_modules/.bin/nodemon", "--watch", "./src", "--exec", "npm", "start" ]