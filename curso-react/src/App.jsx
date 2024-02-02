import Memo from "./Clase12/Memo";

function App() {
  const producto = {id:1, nombre:"Coca Cola", precio:1300, fecha:"02-02-2024"};

  return (
    <>
      <Memo item={producto} />
    </>
  )
}

export default App
