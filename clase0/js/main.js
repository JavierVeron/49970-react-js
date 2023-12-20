// Declaramos una función tradicional - Método #1
/* function mostrarTexto() {
    let texto = document.getElementById("campoTexto");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = texto.value;
} */

// Declaramos una función anónima - Método #2
/* const mostrarTexto = function() {
    let texto = document.getElementById("campoTexto");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = texto.value;
} */

// Declaramos una función flecha (arrow functions) - Método #3 (RECOMENDADA)
const mostrarTexto = () => {
    let texto = document.getElementById("campoTexto"); //Hago referencia al elemento html "campoTexto"
    let resultado = document.getElementById("resultado"); //Hago referencia al elemento html "resultado"
    //let textoPrueba = "hola";
    
    if (validarTexto(texto.value)) {
        rellenarDiv(texto.value, resultado);
        console.log("La función se ejecutó correctamente!");
    }
}

// Definir una función que recibo un texto y verifica si es válido: Devuelve true o false
const validarTexto = (texto) => {
    /* if (texto == "") {
        return false;
    }

    return true; */

    return texto ? true : false;
}

// Defino una función que recibo un texto, y un elemento html destino.
const rellenarDiv = (texto, elemento) => {
    if (texto) {
        elemento.value = texto;
    }
}

document.getElementById("btnEnviar").addEventListener("click", mostrarTexto);