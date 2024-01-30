import { createContext, useContext, useState } from "react";

// Sin Contexto
/* const Componente1 = ({modoOscuro}) => {
    return (
        <Componente2 modoOscuro={modoOscuro} />
    )
}

const Componente2 = ({modoOscuro}) => {
    return (
        <p>Modo Oscuro? <b>{modoOscuro}</b></p>
        )
} */
    
// Definimos un Contexto
const ThemeContext = createContext();

// Con Contexto
const Componente1 = () => {
    return (
        <Componente2 />
    )
}

const Componente2 = () => {
    const {modoOscuro, productos} = useContext(ThemeContext);

    return (
        <div className="container">
            <p>Modo Oscuro? <b>{modoOscuro}</b></p>
            <ul>
                {productos.map(item => (
                    <li key={item.id}>{item.nombre} ${item.precio}</li>
                ))}
            </ul>
        </div>
    )
}

const Componente3 = () => {
    const {modoOscuro, productos, saludar} = useContext(ThemeContext);

    return (
        <div className="container">
            <h3>Modo Oscuro? <b>{modoOscuro}</b></h3>
            <ul>
                {productos.map(item => (
                    <li key={item.id}>{item.nombre} ${item.precio}</li>
                ))}
            </ul>
            {saludar("Mauro")}
        </div>
    )
}

const Contexto = () => {
    const [modoOscuro, setModoOscuro] = useState("Sí");
    const productos = [
        {id:1, nombre:"Coca Cola", precio:1200},
        {id:2, nombre:"Pepsi", precio:1100},
        {id:3, nombre:"Manaos", precio:750}
    ]

    function saludar(nombre) {
        alert("Hola, " + nombre);
    }

    return (
        <div className="container m-5">
            <ThemeContext.Provider value={{modoOscuro, productos, saludar}}>
                <Componente1 />
                {/* <Componente3 /> */}
            </ThemeContext.Provider>
        </div>
    )
}

export default Contexto;