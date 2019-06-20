FROM node
WORKDIR /server
ADD . /server
RUN npm install
ENV PORT 3001
ENV IP "172.17.0.4"
CMD ["node","index.js"]
