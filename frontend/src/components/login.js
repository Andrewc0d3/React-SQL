import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [error, setError] = useState("");

    return(
        <div className="Login">
            <h2>Inicio de sesion</h2>
            <label>Email:</label>
            <br />
            <input type="text"></input>

            <label>Password:</label>
            <br />
            <input type="text"></input>
            <br />
            <button>Login</button>
        </div>
    )
}

export default Login;