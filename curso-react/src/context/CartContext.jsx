import { createContext } from "react";

export const CartContext = createContext(); // Definimos el Nombre del Contexto (y este es el que llamamos siempre)

const CartContextProvider = ({children}) => { // Definir un Contexto Provider
    const productos = [ // Definimos funciones, array, objetos
        {id:1, nombre:"Coca Cola", precio:1200},
        {id:2, nombre:"Pepsi", precio:1100},
        {id:3, nombre:"Manaos", precio:750}
    ]

    const totalProductos = () => {
        return productos.length;
    }

    const sumaTotal = () => {
        return productos.reduce((acumulador, item) => acumulador += item.precio, 0); // Devuelve un solo valor resultante de la FN callback
    }

    const saludo = () => {
        return "Hola Mundo!";
    }

    return (
        <CartContext.Provider value={{productos, totalProductos, sumaTotal, saludo}}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
