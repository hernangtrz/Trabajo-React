import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from "./styles/LoginStyles";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si se ingresó usuario y contraseña
    if (!username || !password) {
      setError("Por favor ingrese usuario y contraseña.");
      return;
    }

    // Verificar las credenciales
    if (username === "admin" && password === "admin") {
      onLogin(username, password);
      navigate("/dashboard"); // Redirige a /dashboard después de autenticarse
    } else {
      setError("Credenciales incorrectas. Intente de nuevo.");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
