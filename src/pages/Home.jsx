import { useState } from "react";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const [mensaje, setMensaje] = useState("¡Bienvenido!");
  const [alternado, setAlternado] = useState(false); // controla el cambio

  const cambiarMensaje = () => {
    if (alternado) {
      setMensaje("¡Bienvenido!");
    } else {
      setMensaje("¡Mensaje actualizado!");
    }
    setAlternado(!alternado); // alterna el valor
  };

  return (
    <div style={{ padding: "2rem" }}>
      <p>{mensaje}</p>
      <CustomButton onClick={cambiarMensaje}>
        Cambiar mensaje
      </CustomButton>
    </div>
  );
};

export default Home;
