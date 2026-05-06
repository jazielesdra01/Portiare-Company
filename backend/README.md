# Backend Portiare Company

## Estrutura de Pastas

```
backend/
├── src/
│   ├── routes/           # Definição de rotas da API
│   ├── controllers/      # Lógica de cada rota
│   ├── models/           # Modelos de dados (schemas)
│   ├── services/         # Serviços e lógica de negócio
│   ├── middleware/       # Middlewares (autenticação, validação, etc)
│   ├── validators/       # Validadores de dados
│   ├── config/           # Arquivos de configuração
│   └── utils/            # Funções utilitárias
├── server.js             # Arquivo principal do servidor
├── package.json          # Dependências do projeto
├── .env                  # Variáveis de ambiente (NÃO COMMITAR)
├── .env.example          # Exemplo de variáveis de ambiente
├── Dockerfile            # Para deploy com Docker
├── docker-compose.yml    # Para rodar com Docker
├── Procfile              # Para deploy no Heroku
└── README.md             # Este arquivo
```

## Instalação

1. Instalar dependências:
```bash
npm install
```

2. Criar arquivo `.env` a partir de `.env.example`:
```bash
cp .env.example .env
```

3. Configurar variáveis de ambiente no arquivo `.env`

## Execução

### Desenvolvimento:
```bash
npm run dev
```

### Produção:
```bash
npm start
```

## API Endpoints

- `GET /` - Serve o index.html (frontend)
- `GET /api` - Endpoints disponíveis
- `GET /api/*` - Suas rotas de API aqui

## Descrição das Pastas

### `routes/`
Responsável por definir as rotas da API. Cada módulo pode ter seu próprio arquivo de rotas.

### `controllers/`
Contém a lógica de cada endpoint. Controllers recebem requisições e retornam respostas.

### `models/`
Define os modelos de dados e schemas do banco de dados.

### `services/`
Contém a lógica de negócio reutilizável. Services são chamados pelos controllers.

### `middleware/`
Middlewares para autenticação, validação, tratamento de erros, etc.

### `validators/`
Validadores de dados de entrada.

### `config/`
Arquivos de configuração do banco de dados, autenticação, etc.

### `utils/`
Funções utilitárias que podem ser reutilizadas em vários lugares do projeto.

## Features

- ✅ Express.js para servidor HTTP
- ✅ CORS habilitado
- ✅ Body Parser para JSON
- ✅ Helmet para segurança
- ✅ Compression para otimização
- ✅ Serve arquivos estáticos (frontend)
- ✅ Pronto para deployment

## Variáveis de Ambiente

```
PORT=3000                 # Porta do servidor
NODE_ENV=production       # Ambiente (development/production)
HOST=0.0.0.0             # Host a ouvir
DB_HOST=localhost        # Host do banco de dados
DB_USER=root             # Usuário do banco
DB_PASSWORD=             # Senha do banco
DB_NAME=portiare_db      # Nome do banco
```

## Deployment

Veja [DEPLOYMENT.md](../DEPLOYMENT.md) para instruções completas sobre:
- Heroku
- Railway
- Docker
- AWS/Google Cloud/Azure

