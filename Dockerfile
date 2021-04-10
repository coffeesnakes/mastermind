FROM node:12.18.4
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . ./
CMD ["npm", "run", "start"]