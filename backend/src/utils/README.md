# Utils

Nesta pasta ficam funções utilitárias reutilizáveis.

## Exemplo de Utilitário

```javascript
// helpers.js
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const calculatePagination = (page, limit) => {
  const skip = (page - 1) * limit;
  return { skip, limit };
};

module.exports = {
  generateId,
  formatDate,
  formatCurrency,
  calculatePagination
};
```
