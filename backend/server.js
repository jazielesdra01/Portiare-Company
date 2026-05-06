require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

// Importar rotas
const apiRoutes = require('./src/routes/api');

// Inicializar app
const app = express();

// Middleware de segurança e performance
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../')));

// Rotas da API
app.use('/api', apiRoutes);

// Servir index.html para rotas não encontradas no frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Qualquer outra rota GET serve o index.html (para SPA)
app.get('/*', (req, res) => {
  // Se for uma rota de API, não fazer nada (já foi tratada)
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Rota de API não encontrada' });
  }
  // Servir o index.html para as outras rotas
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Tratamento de erro para POST/PUT/DELETE
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`✅ Servidor Portiare Company rodando em http://localhost:${PORT}`);
  console.log(`📁 Servindo arquivos estáticos de: ${path.join(__dirname, '../')}`);
  console.log(`🔌 API disponível em: http://localhost:${PORT}/api`);
});
