FROM node:20.11.1-alpine
RUN npm i -g @vue/cli
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD [ "npm", "run", "serve" ]