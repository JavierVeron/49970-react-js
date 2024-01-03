const Clase3 = ({prod, nombre}) => {
    const estilos = {
        color:"red",
        fontWeight:"bold"
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-end">
                    <img src={prod.imagen} alt="Hamburguesa" className="img-fluid" />
                </div>
                <div className="col-md-6 py-5">
                    <h1 className="display-3">{prod.titulo}</h1>
                    <h5>{prod.calorias + " kcal"}</h5>
                    <p>{prod.descripcion}</p>
                    <p className="colorAzul">Mi nombre es: <span style={estilos}>{nombre}</span></p>
                    <p>Mi nombre es: <span style={{color:"blue", fontFamily:"Helvetica", fontSize:22}}>{nombre}</span></p>
                    <div className="alert alert-success" role="alert">Curso de React JS en Coderhouse</div>
                </div>
            </div>
        </div>
    )
}

export default Clase3;