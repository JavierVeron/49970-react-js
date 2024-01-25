import { useEffect, useState } from "react";
//import Intercambiabilidad from "./Intercambiabilidad";
//import Abstraccion1 from "./Abstraccion1";
import Abstraccion2 from "./Abstraccion2";

const Eventos = () => {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState("");
    const [textoMascara, setTextoMascara] = useState("");

    function saludar(evento) {
        setContador(contador + 1);
        console.log(evento.nativeEvent);
        evento.preventDefault();
    }

    function mostrarTexto(e) {
        console.log(e.nativeEvent);
        let nombre = e.target.value.toUpperCase();

        if (nombre != "ANGEL") {
            setTexto("Solo se permite nombres como Angel");
        } else {
            console.log(texto);
            setTexto("");
        }
        //console.log(typeof parseInt(e.target.value));
    }

    function resize() {
        console.log("Hiciste un resize en tu Navegador!!!");
    }

    // Defino un Listener
    window.addEventListener('resize', resize);

    // Función Desafío
    function mascaraInput(event) {
        let letra = event.nativeEvent.key; //obtengo la letra presionada => hola
        //console.log(letra);

        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
            setTextoMascara(textoMascara + letra);
        }

        console.log(textoMascara);
        console.log(letra);
    }

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', resize);
            //console.log("Quitamos el Evento Listener del Resize de Pantalla!");
            return true;
        };
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <form action="">
                        <h1>Eventos</h1>
                        <button className="btn btn-primary" onClick={(evento) => {saludar(evento)}}>Aceptar</button>
                        <p>Contador: {contador}</p>
                        <input type="text" onKeyUp={(e) => {mostrarTexto(e)}} />
                        <p>{texto}</p>
                        <h2>Desafío</h2>
                        <input type="text" className="form-control" onKeyDown={(event) => {mascaraInput(event)}} />
                        <p>{textoMascara}</p>
                    </form> */}
                    {/* <Intercambiabilidad item={10} inputType={"button"} /> */}
                    <Abstraccion2 />
                </div>
            </div>
        </div>
    )
}

export default Eventos;