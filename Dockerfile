FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG API_URL

RUN echo "export const environment = { production: true, API_URL: '$API_URL' };" > src/environments/environment.prod.ts
RUN echo "export const environment = { production: false, API_URL: '$API_URL' };" > src/environments/environment.ts

RUN npm run build --prod

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

COPY --from=builder /app/www/ /usr/share/nginx/html

# Copier un fichier de configuration Nginx personnalisé (optionnel)
#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]