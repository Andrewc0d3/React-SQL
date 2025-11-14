const express = require('express');
const router = express.Router();
const db = require('../config/database');


// Obtener todos los usuarios
router.get('/listar', async(req, res) => {
    const query = "SELECT * FROM usuarios";
    res.json({ mensaje: "usuarios listados" });
    
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: "Error consultando usuarios" });
        res.json(results);
    });
});

module.exports = router;