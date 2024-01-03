import Clase3 from "./Clase3/Clase3"

function App() {
  let producto = {id:1, titulo:"Doble Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", calorias:781, descripcion:"Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."};

  return (
    <>
      <Clase3 prod={producto} nombre={"Esteban"} />
    </>
  )
}

export default App
