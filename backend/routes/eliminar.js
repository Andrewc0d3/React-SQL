const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Eliminar usuario por ID
router.delete('/eliminar/:id', (req, res) => {
    const userId = req.params.id;

    const query = "DELETE FROM usuarios WHERE id = ?";

    db.query(query, [userId], (err, result) => {
        if (err) {
            console.log("Error al eliminar:", err);
            return res.status(500).json({ error: "Error al eliminar usuario" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario eliminado correctamente" });
    });
});

module.exports = router;
