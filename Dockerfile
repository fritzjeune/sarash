FROM node:15
WORKDIR /sarash-app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 5500
ENV MONGODB_URI_ATLAS mongodb+srv://ona-admin:Support1nf0na@cluster0.dyaqp.mongodb.net/sarash-app?retryWrites=true&w=majority
EXPOSE 5500
CMD ["npm", "run", "dev"]