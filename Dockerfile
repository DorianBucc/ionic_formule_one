FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose le port sur lequel l'application tourne (par défaut 3000 pour Node.js)
EXPOSE 3000

# Définit la commande de démarrage du serveur
CMD ["npm", "run", "start:prod"]