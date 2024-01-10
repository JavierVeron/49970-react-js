const Layout = ({titulo, titulo2, children}) => {
    return (
      <div>
        <h1>{titulo}</h1>
        <h2>{titulo2}</h2>
        {children}
      </div>
    )
  }
  
  const Mensaje = ({texto}) => {
    return (
      <p className="bg-secondary text-white p-5">{texto}</p>
    )
  }

const CompChildren = () => {
    return (
        <>
            <Layout titulo={"Curso de React JS...."} titulo2={"Curso de JavaScript"}>
                <p>Otro contenido de prueba... #1</p>
                <p>Otro contenido de prueba... #2</p>
                <Mensaje texto={"Esto es un texto de prueba..."} />
            </Layout>
        </>
    )
}

export default CompChildren;