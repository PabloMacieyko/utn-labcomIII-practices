import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  const [username, setUserName] = useState("");

  const changeHandler = (e) => {
    const name = e.target.value;
    
    if (name.toLowerCase().includes('o')) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      setUserName("");
    }
    setUserName(name);
  };

  const submitHandler = () => {
    if (username.trim() === '') {
      alert("Usuario inválido para registrarse");
      return;
    }

    if (username.toLowerCase().includes('o')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
      return;
    }

    alert("¡Usuario registrado correctamente!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa el nombre"
        value={username}
        onChange={changeHandler}
      />
      <Button variant="outline-info" onClick={submitHandler}>Registrarse</Button>
      <p>{username}</p>
    </div>
  );
};

export default Login;