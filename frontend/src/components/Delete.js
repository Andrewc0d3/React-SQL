import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './Delete.css';

function Delete() {
    const [usuarios, setUsuarios] = useState([]);

    const navigate = useNavigate();
    
    // Cargar usuarios al inicio
    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = () => {
        Axios.get("http://localhost:5001/api/usuarios")
            .then((res) => {
                setUsuarios(res.data);
            })
            .catch((err) => {
                console.log("Error al cargar usuarios:", err);
            });
    };

    const eliminarUsuario = (id) => {
        const confirmar = window.confirm(
            "¿Estás seguro de que deseas eliminar este usuario?"
        );

        if (!confirmar) return;

        Axios.delete(`http://localhost:5001/api/usuarios/eliminar/${id}`)
            .then(() => {
                alert("Usuario eliminado!");
                cargarUsuarios(); // refrescar tabla
            })
            .catch((err) => {
                console.log("Error al eliminar usuario:", err);
            });
    };

    return (
        <div className="Delete">
            <h2>Administrar Usuarios</h2>

            <button onClick={(() => {
                navigate("/inicio");
            })}>Regresar</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((usr) => (
                        <tr key={usr.id}>
                            <td>{usr.id}</td>
                            <td>{usr.nombre}</td>
                            <td>{usr.email}</td>
                            <td>
                                <button onClick={() => eliminarUsuario(usr.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Delete;
