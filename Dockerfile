FROM node:hydrogen-bookworm-slim

COPY ./ /var/www/html/crazycharly

WORKDIR /var/www/html/crazycharly

RUN npm install && npm run build 

EXPOSE 3000

CMD ["npm", "run", "start"]

