FROM node:14-slim

# Setting the working directory to /usr/src/yolo
WORKDIR /usr/src/yolo

# Copying the package.json and package-lock.json files into the container
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the client code into the container
COPY . .

# Exposing port 3000 to the outside world
EXPOSE 3000

# Starting the application
CMD ["npm", "start"]
