// Sugar Syntax
let a = 10;
//a = a + 1;
//a += 1;
a--; 
console.log(a);

// Declarar y asignar el valor Mauro a la variable nombre
let nombre = "pepe";

// Estructura de Control o Decisión (IF)
/* if (nombre == "Mauro") {
    alert("Hola " + nombre);
} else {
    alert("Hola che!");
} */

// Sugar Syntax... Operator Ternario
//alert("Hola " + ((nombre == "Mauro") ? nombre : "che") + "!");

// Operador Spread con Objetos
/* let producto1 = {id:1, nombre:"Coca Cola", precio:1100}; //Objeto tienen propiedades y valores
let producto2 = producto1; // No hace copia, crea una referencia al Objeto Producto 1
producto2.precio = 3000;
let producto3 = {id:2, nombre:"Coca Cola", precio:1200}; // Crea un nuevo objeto
let producto4 = {...producto1, ...producto3, id:4, nombre:"Pepsi", categoria:"gaseosa"}; // Crea un nuevo Objeto
producto4.precio = 1500;
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4); */


// Operador Spread con Arrays
/* let nombres1 = ["Akeno", "Mauro", "Natalia", "Gonzalo", "Gerardo"]; // Crear un Array
let nombres2 = nombres1; // No hace copia, crear una referencia al Array Nombres1
nombres2[1] = "Laura";
console.log(nombres1);
console.log(nombres2);
let nombres3 = ["Luis", "Romina", "Juan", "Pedro"];
let nombres4 = nombres1.concat(nombres3);
console.log(nombres4);
let nombres5 = [...nombres1, "Maria Oehm"]; // Crear un nuevo array con los elementos del Array Nombres1
let nombres6 = [...nombres1, ...nombres3, ...nombres4]; // Crear un nuevo array con los elementos del Array Nombres1 y Nombres3
console.log(nombres5);
console.log(nombres6); */

// Array de Objetos
/* let productos = [
    {id:1, nombre:"Coca Cola", precio:1100},
    {id:2, nombre:"Pepsi", precio:1000},
    {id:3, nombre:"Cunnington Cola", precio:800}
]

console.log(productos);
productos[2].precio = 900;
let producto = productos.find(item => item.nombre == "Pepsi"); // Busca un elemento y devuelve el elemento
producto.precio = 1300;
//console.log(producto);
let productosPremium = productos.filter(item => item.precio > 1000); // Crea un nuevo Array resultante
console.log(productos);
console.log(productosPremium); */


// Método Polyfill de Find
let productos = [
    {id:1, nombre:"Coca Cola", precio:1100},
    {id:2, nombre:"Pepsi", precio:1000},
    {id:3, nombre:"Cunnington Cola", precio:800}
]
/* let producto = productos.find(item => item.nombre == "Pepsi"); // Busca un elemento y devuelve el elemento */

function find(arreglo, valor) {
    let resultado = undefined;

    for (let i=0; i<arreglo.length; i++) {
        if (arreglo[i].nombre == valor) {
            resultado = arreglo[i];
            break;
        }
    }

    return resultado;
}

let producto = find(productos, "Coca Cola");
console.log(producto);


