FROM node:19
WORKDIR /client
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]