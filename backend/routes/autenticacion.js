const expres = require('expres');
const router = express.router();
const db = require('..config/database');
const bcrypt = require('bcryptjs');

// Login
router.post('/login', (req, res) => {


    //Buscar el usurio
    const {email, password} = req.body;
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.qurey(query, [email], (err, results =>{
        if (err) return res.status(500).json({error: 'Error en el servidor'});
        if (results.length ===0) return res.status(401).json({ error: 'Usuario no encontrado'});

        const user = results[0];

        //Comparar las contraseñas
        const passwordValida = bcrypt.compareSync(password, user.password);
        if (!passwordValida) return res.status(401).json({error: 'Contraseña incorrecta'});

        // Login exitoso
        res.json({
            message: 'Login exitoso',
            user: {

                id: user.id,
                nombre: user.nombre,
                email: user.email
            }
        });
    }));
});

module.exports = router;