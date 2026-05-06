# 🚀 Portiare Company - Quick Start

## Iniciar Localmente (2 minutos)

### Passo 1: Instalar dependências
```bash
cd backend
npm install
```

### Passo 2: Rodar o servidor
```bash
npm start
```

### Passo 3: Abrir no navegador
```
http://localhost:3000
```

---

## ✅ O que está pronto?

- ✅ Frontend (HTML, CSS, JS) servido automaticamente
- ✅ Backend Express rodando na porta 3000
- ✅ Arquivos estáticos comprimidos (compression)
- ✅ Segurança com Helmet
- ✅ CORS habilitado para APIs
- ✅ Pronto para deployment

---

## 🚢 Para colocar no AR

Leia o arquivo [DEPLOYMENT.md](DEPLOYMENT.md) para instruções detalhadas sobre:
- Heroku (grátis)
- Railway (recomendado)
- Docker
- AWS/Google Cloud/Azure
- E muito mais

---

## 📁 Estrutura

```
Portiare Company/
├── index.html              # Home page
├── branding-premium.html   # Página de branding
├── estrategia-digital.html # Página de estratégia
├── trafego-pago.html       # Página de tráfego pago
├── conteudo-criativo.html  # Página de conteúdo
├── depoimentos.html        # Página de depoimentos
├── assets/                 # CSS, JS, imagens
│   ├── css/style.css
│   ├── js/script.js
│   └── img/
└── backend/                # Backend Node.js
    ├── src/                # Código fonte
    │   ├── routes/
    │   ├── controllers/
    │   ├── services/
    │   ├── models/
    │   ├── middleware/
    │   ├── validators/
    │   ├── config/
    │   └── utils/
    ├── server.js           # Arquivo principal
    ├── package.json        # Dependências
    └── Procfile            # Para Heroku
```

---

## 💡 Próximos passos

1. **Instalar e testar localmente**
   ```bash
   cd backend && npm install && npm start
   ```

2. **Se tudo funcionar, escolher plataforma para deploy**
   - Recomendado: Railway ou Heroku (mais fácil)
   - Avançado: Docker + AWS/Azure

3. **Conectar domínio**
   - Após deploy, apontar seu domínio para a URL gerada

---

## 🆘 Problemas?

1. Porta 3000 já em uso? → Mudar em `.env`
2. Node.js não instalado? → Instalar de https://nodejs.org
3. Erro no npm? → `npm cache clean --force`

---

**Tudo está pronto para colocar no ar! 🎉**
