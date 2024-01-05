import { useState } from "react";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";
import Boton from "./Boton";

const CompContenedor = () => {
    const [curso, setCurso] = useState("Curso de JavaScript");

    function modificarCurso() {
        setCurso(curso == "Curso de JavaScript" ? "Curso de React JS!" : "Curso de JavaScript");
    }

    return (
        <>
            <Titulo titulo={"Coderhouse"} />
            <Parrafo parrafo={curso} />
            <Boton accion={modificarCurso} />
        </>
    )
}

export default CompContenedor;