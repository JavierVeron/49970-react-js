import { useEffect, useState } from "react"

const CargarMensaje = ({condicion}) => {
    const [visible, setVisible] = useState(condicion);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }, []);

    return (
        <>
            <h2 style={{color: visible ? 'red' : 'green' }}>Curso de React JS</h2>
        </>
    )
}

const CargarMensaje2 = ({condicion, condicion2, otraClase}) => {
    return (
        <>
            <h2 className={`${condicion ? 'fw-bold' : ''} ${otraClase || ''}`}>Curso de React JS</h2>
            <h3 className={`${condicion ? 'fw-bold' : ''} ${condicion2 && 'text-danger'}`}>Curso de JavaScript</h3>
        </>
    )
}

const CargarMensaje3 = ({condicion, condicion2}) => {
    const configuracion = condicion ? {
        className:`text-danger ${condicion2 && 'fw-bold'}`,
        title: 'Título del Componente'
    } : '';
    
    return (
        <>
            <h2 {...configuracion}>Componente #3</h2>
        </>
    )
}

const Rendering2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Técnicas de Rendering #2</h1>
                    <CargarMensaje condicion={true} />
                    <CargarMensaje2 condicion={true} otraClase={"text-decoration-line-through"} condicion2={true} />
                    <CargarMensaje3 condicion={true} condicion2={true}/>
                </div>
            </div>
        </div>
    )
}

export default Rendering2;