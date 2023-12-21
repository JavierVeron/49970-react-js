import Subtitulo from "./Subtitulo";

const Titulo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center fondoNegro colorAmarillo espaciado">Coderhouse</h1>
                    <Subtitulo />   
                </div>
            </div>
        </div>
    )
}

export default Titulo;