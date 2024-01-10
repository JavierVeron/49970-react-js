import { useEffect, useState } from "react"

const CompEfecto2 = ({valor, nombre}) => {
    const [valor2, setValor2] = useState(valor * 2);
    const [nombre2, setNombre2] = useState(nombre);
    console.log("#1 - Montaje del Componente");

    /* useEffect(() => {
        setValor2(valor * 3);
    }, []) //Se ejecuta 1 vez, en el momento del montaje de la app */

    useEffect(() => {
        setValor2(valor);
        setNombre2(nombre);
        console.log("#2 - Actualización del Componente");

        return () => { //Solo se ejecuta cuando se quita/desmonta el componente
            console.log("#3 - Desmontaje del Componente");
        }
    }, [valor, nombre]) //Se ejecuta siempre, leyendo/escuchando un cambio en el estado valor

    return (
        <>
            <h2>Valor del Contador: {valor2}</h2>
            <h3>Nombre: {nombre2}</h3>
        </>
    )
}

export default CompEfecto2