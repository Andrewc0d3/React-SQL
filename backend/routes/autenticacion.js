const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log("📩 Email recibido:", email);
  console.log("🔑 Password recibido:", password);

  // Validación básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  const query = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

  db.query(query, [email, password], (err, results) => {

    if (err) {
      console.log("❌ Error en login:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    console.log("🛢️ Resultado SQL:", results);

    // Si no se encontró usuario
    if (results.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // Login exitoso
    return res.json({
      message: "Login exitoso",
      usuario: {
        id: results[0].id,
        nombre: results[0].nombre,
        email: results[0].email
      }
    });
  });
});

module.exports = router;

