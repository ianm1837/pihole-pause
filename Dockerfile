FROM node:20.5

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 3000 3001

CMD ["./entrypoint.sh"]