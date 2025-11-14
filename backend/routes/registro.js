const express = require('express');
const router = express.Router();
const db = require('../config/database'); // conexión MySQL

// POST para registrar un usuario
router.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;

    // Validación básica
    if (!nombre || !email || !password) {
        return res.status(400).json({
            error: "Faltan campos obligatorios (email o password)"
        });
    }

    const query = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";

    db.query(query, [nombre, email, password], (err, results) => {
        if (err) {
            console.error("Error al registrar usuario:", err);
            return res.status(500).json({
                error: "Error al registrar usuario",
                details: err.message
            });
        }

        res.status(201).json({
            message: "Usuario registrado correctamente",
            usuarioId: results.insertId
        });
    });
});

module.exports = router;
