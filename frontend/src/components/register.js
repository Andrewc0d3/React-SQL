import React, {useState} from "react";
import Axios from "axios";
import {useNavigate} from "react-router"
import './login.css';

function Register() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registrarUsuario = () => {

        Axios.post("http://localhost:5001/api/usuarios/registro",{
            nombre: nombre,
            email: email,
            password: password
        }).then(() => {

            alert("Registro éxitoso!!");
            navigate("/");
        }).catch((err) => {
            setError("Valores incorrectos");
            console.log(err);
        })
    }
    return(
        <div className="Login">
            <h2>Regístrate</h2>
            <label>Nombre:</label>
            <br />
            <input onChange={(event) => {
                setNombre(event.target.value);
            }}type="text"></input><br />

            <label>Email:</label>
            <br />
            <input onChange={(event) => {
                setEmail(event.target.value);
            }}type="text"></input><br />

            <label>Password:</label>
            <br />
            <input onChange={(event) => {
                setPasword(event.target.value);
            }}type="text"></input><br />
            <br />
            <button onClick={registrarUsuario}>Registrar</button><br />
            <p>¿Ya estas registrado?</p>
            <button onClick={(() => {
                navigate("/");
            })}>Iniciar Sesion</button>
        </div>
    )
}

export default Register