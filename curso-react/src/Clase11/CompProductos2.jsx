import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CompProductos2 = () => {
    const {saludo} = useContext(CartContext);

    return (
        saludo()
    )
}

export default CompProductos2;