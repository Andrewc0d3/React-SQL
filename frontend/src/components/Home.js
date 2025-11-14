import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {

  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Bienvenido a la App React + MySQL</h1>
      <p>Esta es la página principal del sistema.</p><br />
      <h2>Menú</h2>
      <li>
        <ul onClick={(() => {
          navigate("/eliminar")
        })}>Gestionar usuarios</ul>
        <ul onClick={(() => {
          navigate("/actualizar");
        })}>Actualizar datos</ul>
        <ul onClick={(() => {
          localStorage.clear();
          navigate("/");
        })}>Cerrar Sesion</ul>
      </li>
    </div>
  );
}

export default Home;
