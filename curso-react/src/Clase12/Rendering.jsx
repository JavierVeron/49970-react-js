import { useEffect, useState } from "react";
import Loading from "./Loading";
import Productos12 from "./Productos12";
import arrayProductos from "../Clase7/productos.json";

/* const Saludo1 = () => {
    useEffect(() => {
        return () => {
            console.log("Componente desmontado!"); //Efecto cleanup (se dispara cuando se desmonta el componente)
        }   
    })

    return (
        <h1>Estoy cursando JavaScript...</h1>
    )
}

const Saludo2 = () => {
    return (
        <h1>Estoy cursando React JS...</h1>
    )
} */

const CargarMensaje = ({condicion}) => {
    return (
        <>
            {condicion && <h2 className="text-center">Condición está en TRUE</h2>}
            {!condicion && <h2 className="text-center">Condición está en FALSE</h2>}
            {/* {condicion ? <h2 className="text-center">Condición está en TRUE</h2> : <h2 className="text-center">Condición está en FALSE</h2>} */}
            <h2 className="text-center">Condición está en {condicion ? "TRUE" : "FALSE"}</h2>
        </>
    )
}

const Rendering = () => {
    const [visible, setVisible] = useState(true);
    const [productos, setProductos] = useState(arrayProductos);

    /* useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }, []) */

    useEffect(() => {
        const productosFiltro = productos.filter(item => item.categoria == "led");
        setProductos(productosFiltro);

        if (productos.length != 0) {
            setVisible(false);
        }
    }, []);

    if (productos.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>😡</h1>
                        <h3>No se encontraron productos!</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Técnicas de Rendering</h1>
                    {/* {visible ? <h2 className="text-danger">Cargando...</h2> : <h3 className="text-success">Contenido Cargado!</h3>} */}
                    {/* {visible ? <Saludo1 /> : <Saludo2 />} */}
                </div>
            </div>
            <div className="row">
                {visible ? <Loading /> : <Productos12 /> }
            </div>
            <div className="row">
                <CargarMensaje condicion={false} />
            </div>
        </div>
    )
}

export default Rendering;