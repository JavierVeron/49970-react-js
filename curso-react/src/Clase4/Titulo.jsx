const Titulo = ({titulo}) => {
    return (
        <h1 className={"colorRojo"}>{titulo.toUpperCase() + "!"}</h1>
    )
}

export default Titulo;