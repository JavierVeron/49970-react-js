import { useRef } from "react";

const CompUseRef = () => {
    const contenidoRef = useRef("");
    const contenidoRef2 = useRef("");

    const modificarDiv1 = () => {
        contenidoRef.current.innerHTML = `<p>Nuevo Contenido #1</p>
        <p>Nuevo Contenido #2</p>
        <p>Nuevo Contenido #3</p>`;
        contenidoRef.current.className = "alert alert-warning";
    }

    const modificarDiv2 = () => {
        contenidoRef2.current.innerHTML = "Nuevo Contenido #2";
    }

    return (
        <>
            <div className="alert alert-primary" role="alert" ref={contenidoRef}>
                <p>Un contenido de prueba... #1</p>
                <p>Un contenido de prueba... #2</p>
            </div>
            <button className="btn btn-primary" onClick={modificarDiv1}>Modificar Contenido DIV #1</button>
            <hr />
            <div className="alert alert-secondary" role="alert" ref={contenidoRef2}>
                <p>Un contenido de prueba...</p>
            </div>
            <button className="btn btn-primary" onClick={modificarDiv2}>Modificar Contenido DIV #1</button>
        </>
    )
}

export default CompUseRef;