import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";
import { TextField, Button, Box } from "@mui/material";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      login("fake-token");
      navigate("/");
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} p={3} maxWidth={300} margin="auto">
      <TextField label="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
      <TextField label="Contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Iniciar sesión</Button>
    </Box>
  );
};

export default Login;
