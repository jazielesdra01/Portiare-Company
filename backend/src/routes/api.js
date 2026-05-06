const express = require('express');
const router = express.Router();

// Importar rotas específicas aqui
// const userRoutes = require('./users');
// const productRoutes = require('./products');

// Usar rotas
// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

// Rota padrão da API
router.get('/', (req, res) => {
  res.json({
    message: 'API Portiare Company',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      services: '/api/services'
    }
  });
});

module.exports = router;
