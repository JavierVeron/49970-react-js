import { useState } from "react";

const EjemploMap = () => {
    const [productosPagina, setProductosPagina] = useState([]);

    const productos = [
        {id:1, name:"Samsung Galaxy A04e 64 GB negro 3 GB RAM", description:"Celular Samsung", stock:10, price:149999, imagen:"https://http2.mlstatic.com/D_NQ_NP_907305-MLU69805932292_062023-O.webp"},
        {id:2, name:"Motorola Moto E22 64g 4gb Ram Azul", description:"Celular Motorola E13", stock:0, price:139999, imagen:"https://http2.mlstatic.com/D_NQ_NP_973921-MLA73734184832_012024-O.webp"},
        {id:3, name:"Motorola Moto E13 64gb 2gb Ram Azul Turquesa", description:"Celular Motorola E13 Azul", stock:7, price:129999, imagen:"https://http2.mlstatic.com/D_NQ_NP_818200-MLA54005510824_022023-O.webp"},
        {id:4, name:"Celular Liberado Zte Blade A53 Plus 4g 6.52p Gris", description:"Celular ZTE", stock:7, price:109999, imagen:"https://http2.mlstatic.com/D_NQ_NP_996739-MLU71522502542_092023-O.webp"},
        {id:5, name:"Samsung Galaxy A04e 64 GB negro 3 GB RAM", description:"Celular Samsung", stock:10, price:149999, imagen:"https://http2.mlstatic.com/D_NQ_NP_907305-MLU69805932292_062023-O.webp"},
        {id:6, name:"Motorola Moto E22 64g 4gb Ram Azul", description:"Celular Motorola E13", stock:0, price:139999, imagen:"https://http2.mlstatic.com/D_NQ_NP_973921-MLA73734184832_012024-O.webp"},
        {id:7, name:"Motorola Moto E13 64gb 2gb Ram Azul Turquesa", description:"Celular Motorola E13 Azul", stock:7, price:129999, imagen:"https://http2.mlstatic.com/D_NQ_NP_818200-MLA54005510824_022023-O.webp"},
        {id:8, name:"Celular Liberado Zte Blade A53 Plus 4g 6.52p Gris", description:"Celular ZTE", stock:7, price:109999, imagen:"https://http2.mlstatic.com/D_NQ_NP_996739-MLU71522502542_092023-O.webp"}
    ];

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    })
    promesa.then(data => {
        setProductosPagina(data);
    })

    return (
        <div className="container my-5">
            <div className="row">
                {productosPagina.map(producto => (
                    <div key={producto.id} className="col-md-3">
                        <div className="card text-center border-0">
                            <img src={producto.imagen} className="img-fluid" alt={producto.name} />
                            <div className="card-body">
                                <p className="card-text"><b>{producto.name}</b></p>
                                <p className="card-text">${producto.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EjemploMap;