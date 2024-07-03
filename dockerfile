#   base image for react app
FROM  node:22.3.0-alpine3.19


WORKDIR  /app


# copy all the package.json and package.lock.json to the docker image from the local machine
COPY package*.json ./


#install all dependencies
RUN npm install


# copy all the files from the local machine to the current working direcory the current working directory is app which was set earlier with  "WORKDIR /app" command.

COPY . .


# The EXPOSE instruction in a Dockerfile is used to specify the port on which the container listens for connections.

EXPOSE 5173



CMD npm run dev