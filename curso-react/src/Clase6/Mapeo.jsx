const Mapeo = () => {
    const usuarios = [
        {dni:12345678,nombre:"Agustín", edad:25, dineroMP:100000},
        {dni:12345677,nombre:"Nazarena", edad:23, dineroMP:200000},
        {dni:12345666,nombre:"Gonzalo", edad:48, dineroMP:1000000}
    ];
    /* console.log(usuarios);
    console.log(usuarios.map(pepe => (pepe.dineroMP * 1.2)));
    console.log(usuarios.map(item => ({nombreUsuario:item.nombre.toUpperCase(), edadUsuario:item.edad, mayorEdad:true}))); */

    return (
        <>
            <h1>Método Map</h1>
            <ul>
                {usuarios.map(item => (
                    <li key={item.dni}>Nombre: <b>{item.nombre}</b> - Edad: <b>{item.edad}</b></li>
                ))}
            </ul>
        </>
    )
}

export default Mapeo;