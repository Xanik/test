FROM node:boron

COPY . .

EXPOSE 3100

CMD ["node", "hello.js"]