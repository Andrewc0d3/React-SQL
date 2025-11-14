const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM usuarios ORDER BY id DESC';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            return res.status(500).json({
                error: 'Error al obtener usuarios',
                details: err.message
            });
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: "Error obteniendo usuario" });

        if (results.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.json(results[0]);
    });
});


module.exports = router;