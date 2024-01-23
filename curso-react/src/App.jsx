import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Clase9/ItemListContainer";
import Titulo9 from "./Clase9/Titulo9";
import Contenido from "./Clase9/Contenido";
import PiePagina9 from "./Clase9/PiePagina9";
import Error404 from "./Clase9/Error404";

function App() {
  return (
    <BrowserRouter>
      <Titulo9 />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/productos"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/contenido"} element={<Contenido />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <PiePagina9 />
    </BrowserRouter>
  )
}

export default App
