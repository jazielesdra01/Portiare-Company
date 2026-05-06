# Config

Nesta pasta ficam os arquivos de configuração do projeto.

## Exemplo de Arquivo de Config

```javascript
// database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

```javascript
// jwt.js
module.exports = {
  secret: process.env.JWT_SECRET || 'seu_secret_key',
  expiresIn: '24h'
};
```
