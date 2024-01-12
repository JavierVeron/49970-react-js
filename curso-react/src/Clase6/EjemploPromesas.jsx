const EjemploPromesas = () => {
    const productos = [
        {id:1, name:"Samsung Galaxy A04e 64 GB negro 3 GB RAM", description:"Celular Samsung", stock:10, price:149999},
        {id:2, name:"Motorola Moto E13 64gb 2gb Ram Azul Turquesa", description:"Celular Motorola", stock:0, price:149999},
        {id:3, name:"Celular Liberado Zte Blade A53 Plus 4g 6.52p Gris", description:"Celular ZTE", stock:7, price:109249}
    ];

    const promesa = new Promise((resolve, reject) => {
        console.log("Iniciando promesa...");
        setTimeout(() => {
            const productosSalida = productos.filter(item => item.stock > 20);
            //resolve(productosSalida);
            if (productosSalida.length > 0) {
                resolve(productosSalida);
            } else {
                reject("No se encontraron Productos!");
            }
        }, 3000);
    })

    promesa.then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log("Error: " + error);
    })

    return (
        <h1>Ejemplo Promesas</h1>
    )
}

export default EjemploPromesas;