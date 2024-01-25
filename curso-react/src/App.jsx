import { useState } from "react";
import Eventos from "./Clase10/Eventos";

function App() {
  const [visible, setVisible] = useState(true);

  function ocultarComponente() {
    setVisible(false);
  }

  return (
    <>
      {visible ? <Eventos /> : ""}
      <p><button className="btn btn-primary" onClick={ocultarComponente}>Ocultar Componente</button></p>

    </>
  )
}

export default App
