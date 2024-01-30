import Contexto from "./Clase11/Contexto";
import CartContextProvider from "./context/CartContext";
import CompProductos from "./Clase11/CompProductos";
import CompProductos2 from "./Clase11/CompProductos2";

function App() {
  return (
    <>
      <CartContextProvider>
        <Contexto />
        <CompProductos />
        <CompProductos2 />
      </CartContextProvider>
    </>
  )
}

export default App
