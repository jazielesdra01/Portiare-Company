# Validators

Nesta pasta ficam os validadores de dados de entrada.

## Exemplo de Validator

```javascript
// userValidator.js
const validateUser = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Nome é obrigatório';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Email inválido';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Telefone inválido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValidPhone = (phone) => {
  const re = /^(\d{10,11})$/;
  return re.test(phone.replace(/\D/g, ''));
};

module.exports = {
  validateUser,
  isValidEmail,
  isValidPhone
};
```
