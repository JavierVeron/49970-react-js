import {memo} from "react";

const Memo = memo(({item}) => {
    console.log("Item Renderizado!");

    return (
        <h3 className="text-center">{item.nombre} ${item.precio}</h3>
    )
}, (oldProps, newProps) => oldProps.item.fecha === newProps.item.fecha);

export default Memo;