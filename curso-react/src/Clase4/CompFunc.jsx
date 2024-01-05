import { useState } from "react";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";
import Item from "./Item";

const CompFunc = () => {
    const [texto, setTexto] = useState("Mi Primer Texto!"); // mi useState llamada texto
    const [otroTexto, setOtroTexto] = useState("");

    const modificarTexto = () => {
        setTexto("Texto Modificado por un Click!");
        setOtroTexto("Datos Enviados!");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Titulo titulo={"Coderhouse"} />
                    <Parrafo parrafo={"Curso de React JS"} />
                    <p>{texto}</p>
                    <div className={otroTexto ? 'alert alert-success' : ''} role='alert'>{otroTexto}</div>
                    <p><button onClick={modificarTexto} className="btn btn-primary">Modificar Texto</button></p>
                    <p>Desayunos:</p>
                    <ul>
                        <Item valor="Té" />
                        <Item valor="Café" />
                        <Item valor="Mate" />
                        <Item valor="Chocolatada" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompFunc;