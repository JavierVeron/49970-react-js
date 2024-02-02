import { useEffect, useState } from "react";
import arrayProductos from "../Clase7/productos.json";

const Productos12 = () => {
    const [productosItem, setProductosItem] = useState([]);

    useEffect(() => {
        setProductosItem(arrayProductos);
    }, [arrayProductos])

    return (
        <>
            {productosItem.map(produ => (
                <div key={produ.id} className="col-md-3">
                    <div className="card border-0">
                        <img src={produ.imagen} className="img-fluid" alt={produ.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{produ.nombre}</h5>
                            <p className="card-text">${produ.precio}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Productos12;