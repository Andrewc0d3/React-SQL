import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './updateData.css';

function UpdateData() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId"); // ID del usuario logeado

    // Cargar datos actuales del usuario al entrar al componente
    useEffect(() => {
        Axios.get(`http://localhost:5001/api/usuarios/${userId}`)
            .then(res => {
                setNombre(res.data.nombre);
                setEmail(res.data.email);
                setPassword(res.data.password);
            })
            .catch(err => console.log(err));
    }, [userId]);

    const actualizarDatos = () => {
        Axios.put(`http://localhost:5001/api/usuarios/actualizar/${userId}`, {
            nombre,
            email,
            password
        })
        .then(() => {
            setMensaje("Datos actualizados correctamente");
        })
        .catch((err) => {
            setMensaje("Error al actualizar");
            console.log(err);
        });
    };

    return (
        <div className="UpdateData">
            <button onClick={(() => {
                navigate("/inicio");
            })}>Regresar</button>

            <h2>Actualizar datos de tu cuenta</h2>

            <label>Nombre:</label><br />
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" /><br />

            <label>Email:</label><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" /><br />

            <label>Password:</label><br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" /><br />

            <button onClick={actualizarDatos}>Actualizar</button>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default UpdateData;
