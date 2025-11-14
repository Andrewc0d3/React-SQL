const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
const autRoutes = require('./routes/autenticacion');
const registroRoutes = require('./routes/registro');
const actualizarRoutes = require('./routes/actualizar');
const eliminarRoutes = require('./routes/eliminar');
const listarRoutes = require('./routes/listar');

const app = express();

const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/auth', autRoutes);
app.use('/api/usuarios', registroRoutes);
app.use('/api/usuarios', actualizarRoutes);
app.use('/api/usuarios', eliminarRoutes);
app.use('/api/usuarios', listarRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API de Usuarios funcionando correctamente' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en
http://localhost:${PORT}`);
});