const Promesas = () => {
    /* const promesa = new Promise((resolve, reject) => { //Función que recibe como parámetro un función devuelve un valor
        let tePortasteMal = false;

        if (tePortasteMal) {
            resolve("SERAS CASTIGADA!");
        } else {
            reject("Te portaste bien!");
        }
    });

    promesa.then(resultado => {
        console.log(resultado);
    }).catch(resultado => {
        console.log("Motivo del rechazo: " + resultado);
    }) */

    const productos = [
        {id:1, nombre:"Coca Cola", precio:1500},
        {id:2, nombre:"Pepsi", precio:1400},
        {id:3, nombre:"Manaos", precio:1000}
    ];

    const mostrarResultados = true;

    const promesa = new Promise((resolve, reject) => {
        mostrarResultados ? resolve(productos) : reject("No se encontraron productos!")
    });

    /* promesa.then(data => {
        console.log(data);
    })
    .catch(motivo => {
        console.log("Error: " + motivo);
    })
    .then(() => {
        console.log("Ejecutando el #2 método then!");
    })
    .then(() => {
        console.log("Ejecutando el #3 método then!");
    })
    .finally(() => {
        console.log("Fin de ejecución de mi Promesa!");
    })
    .then(() => {
        console.log("Ejecutando el #4 método then!");
    }) */

    promesa.then(data => {
        console.log(data);
    })
    .catch(motivo => {
        console.log("Error: " + motivo);
    })
    .then(() => {
        console.log("Ejecutando otra cosa...");
    })
    .finally(() => {
        console.log("Fin de ejecución de mi Promesa!");
    })

    return (
        <h1>Promesas</h1>
    )
}

export default Promesas;