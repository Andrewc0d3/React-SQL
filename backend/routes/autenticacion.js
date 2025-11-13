const express = require('express');
const router = express.Router();

// Ejemplo de ruta
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@email.com' && password === '1234') {
    res.json({ message: 'Login correcto' });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

module.exports = router;
