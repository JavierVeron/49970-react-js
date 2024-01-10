import { useState } from "react";
import CompEfecto2 from "./CompEfecto2";

const CompEfecto = () => {
    const [contador, setContador] = useState(10);
    const [nombre, setNombre] = useState("María");
    const [visible, setVisible] = useState(true);

    const incrementarContador = () => {
        setContador(contador + 1);

        if (nombre == "María") {
            setNombre("Juana");
        } else {
            setNombre("Roxana");
        }
    }

    const quitarComponente = () => {
        setVisible(false);
    }

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementarContador} className="btn btn-primary">Incrementar</button>
            {visible ? <CompEfecto2 valor={contador} nombre={nombre} /> : ""}
            <button onClick={quitarComponente} className="btn btn-primary">Quitar Componente Efecto #2</button>
        </>
    )
}

export default CompEfecto;