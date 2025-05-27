import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate("/")}>Inicio</Button>
        <Button color="inherit" onClick={() => navigate("/dashboard")}>Dashboard</Button>
        <Button color="inherit" onClick={() => { logout(); navigate("/login"); }}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
