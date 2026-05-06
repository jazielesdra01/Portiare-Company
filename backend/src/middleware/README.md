# Middleware

Nesta pasta ficam os middlewares como autenticação, validação, tratamento de erros, etc.

## Exemplo de Middleware

```javascript
// auth.js
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = auth;
```

## Exemplo de Middleware de Tratamento de Erros

```javascript
// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor'
  });
};

module.exports = errorHandler;
```
