# 🚀 Guia de Deployment - Portiare Company

Este guia mostra como colocar o site Portiare no ar em diferentes plataformas.

## 📋 Pré-requisitos
- Node.js 18+ instalado
- Git instalado
- Conta em uma das plataformas (Heroku, Railway, Vercel, etc)

## 🔧 Instalação Local

```bash
cd backend
npm install
npm start
```

O site estará disponível em `http://localhost:3000`

---

## 1️⃣ Deploy no **Heroku**

### Passo 1: Criar conta no Heroku
- Acesse https://www.heroku.com
- Crie uma conta gratuita

### Passo 2: Instalar Heroku CLI
```bash
# Windows
choco install heroku-cli

# macOS
brew install heroku/brew/heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

### Passo 3: Deploy
```bash
# Fazer login
heroku login

# Criar app
heroku create portiare-company

# Deploy
git push heroku main

# Ver logs
heroku logs --tail
```

### Passo 4: Acessar
```
https://portiare-company.herokuapp.com
```

---

## 2️⃣ Deploy no **Railway**

### Passo 1: Criar conta no Railway
- Acesse https://railway.app
- Crie uma conta com GitHub

### Passo 2: Conectar projeto
1. Clique em "New Project"
2. Selecione "Deploy from GitHub"
3. Escolha o repositório
4. Clique em "Deploy"

### Passo 3: Acessar
- Railway gera automaticamente um URL público

---

## 3️⃣ Deploy no **Render**

### Passo 1: Criar conta no Render
- Acesse https://render.com
- Crie uma conta

### Passo 2: Criar Web Service
1. Clique em "New +"
2. Selecione "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### Passo 3: Deploy
- Clique em "Create Web Service"
- Render faz o deploy automaticamente

---

## 4️⃣ Deploy com **Docker**

### Usando Docker Compose (Recomendado)
```bash
# Fazer build e rodar
docker-compose up -d

# Parar
docker-compose down
```

### Usando Docker direto
```bash
# Build
docker build -t portiare-app .

# Rodar
docker run -p 3000:3000 portiare-app

# Parar
docker stop <container-id>
```

---

## 5️⃣ Deploy no **AWS/Google Cloud/Azure**

### EC2 (AWS)
1. Criar instância EC2 (Ubuntu)
2. SSH na instância
3. Instalar Node.js
4. Clonar repositório
5. Instalar dependências: `npm install`
6. Rodar: `npm start`

Usar PM2 para manter o app rodando:
```bash
npm install -g pm2
pm2 start server.js --name "portiare"
pm2 startup
pm2 save
```

---

## 📋 Checklist antes de fazer Deploy

- [ ] Variáveis de ambiente configuradas (.env)
- [ ] Todos os arquivos commitados no Git
- [ ] Testes locais rodando (`npm start`)
- [ ] Frontend está na raiz do projeto
- [ ] Backend server.js serve os arquivos estáticos
- [ ] Nenhuma porta 3000 em conflito

---

## 🔒 Variáveis de Ambiente

No seu painel de controle da plataforma, adicionar:

```
PORT=3000
NODE_ENV=production
HOST=0.0.0.0
```

Se usar banco de dados:
```
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_banco
```

---

## 📊 Monitoramento

### Logs
```bash
# Heroku
heroku logs --tail

# Railway
railway logs

# Local
npm start
```

### Performance
- Usar CloudFlare para CDN
- Ativar GZIP compression (já ativado no código)
- Cache de arquivos estáticos

---

## 🆘 Troubleshooting

### Port já em uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Modelos não instalados
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### App não inicia
```bash
npm start  # Testar localmente
echo $? # Verificar código de erro
```

---

## 💡 Recomendações

1. **Heroku** - Melhor para começar (free tier)
2. **Railway** - Mais moderno e fácil
3. **Render** - Gratuito e confiável
4. **Docker** - Melhor controle

---

## 📞 Suporte

Se tiver problemas:
1. Verificar logs
2. Testar localmente
3. Consultar documentação da plataforma
4. Verificar se todas as dependências estão no package.json
