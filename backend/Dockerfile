# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Copiar node_modules do builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copiar código da aplicação
COPY server.js ./
COPY src ./src

# Expor porta
EXPOSE 3000

# Variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Comando para iniciar
CMD ["npm", "start"]
