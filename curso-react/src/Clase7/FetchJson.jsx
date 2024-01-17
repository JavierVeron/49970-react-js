import { useEffect, useState } from "react";
import arrayProductos from "./productos.json";

const FetchJson = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(arrayProductos);
    })

    /* fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        setProductos(datos);
    }); */

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Fakestore API</h1>
                </div>
            </div>
            <div className="row">
                {productos.map(produ => (
                    <div key={produ.id} className="col-md-3">
                        <div className="card">
                            <img src={produ.imagen} className="img-fluid" alt={produ.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{produ.nombre}</h5>
                                <p className="card-text">${produ.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchJson;