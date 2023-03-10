FROM node:19
WORKDIR /server
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "server"]
