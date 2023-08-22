FROM node:16.15.1
EXPOSE 8085
COPY server.js .
CMD [ "node", "server.js" ]
