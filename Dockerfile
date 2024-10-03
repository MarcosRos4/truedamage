FROM node:20.10

WORKDIR /truedamage

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

CMD npm start