import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    const [productosItem, setProductosItem] = useState([]);

    useEffect(() => {
        setProductosItem(productos);
    }, [productos])

    return (
        <>
            {productosItem.map(produ => (
                <div key={produ.id} className="col-md-3">
                    <Item producto={produ} />
                </div>
            ))}
        </>
    )
}

export default ItemList;