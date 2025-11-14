const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Actualizar datos del usuario
router.put('/actualizar/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, email, password } = req.body;

    const query = `
        UPDATE usuarios
        SET nombre = ?, email = ?, password = ?
        WHERE id = ?
    `;

    db.query(query, [nombre, email, password, userId], (err, result) => {
        if (err) {
            console.log("Error al actualizar:", err);
            return res.status(500).json({ error: "Error al actualizar usuario" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario actualizado correctamente" });
    });
});

module.exports = router;

