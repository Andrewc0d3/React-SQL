import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router"
import './login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registrarUsuario = () => {

        Axios.post("http://localhost:5001/api/auth/login", {
            email: email,
            password: password
        }).then((response) => {

            const userId = response.data.usuario.id;

            // Guardar ID en localStorage
            localStorage.setItem("userId", userId);

            console.log("ID guardado:", userId);
            alert("Inicio de sesion exitoso!");
            navigate("/inicio")
        }).catch((err) => {
            setError("Credenciales incorrectas");
            alert("Credenciales incorrectas");
            console.log(err);
        })
    }
    return (
        <div className="Login">
            <h2>Inicio de sesion</h2>
            <label>Email:</label>
            <br />
            <input onChange={(event) => {
                setEmail(event.target.value);
            }} type="text"></input><br />

            <label>Password:</label>
            <br />
            <input onChange={(event) => {
                setPasword(event.target.value);
            }} type="text"></input>
            <br />
            <button onClick={registrarUsuario}>Ingresar</button>
            <br />
            <p>¿No te has registrado?</p>
            <button onClick={(() => {
                navigate("/registro");
            })}>Registrate aqui</button>
        </div>
    )
}

export default Login;