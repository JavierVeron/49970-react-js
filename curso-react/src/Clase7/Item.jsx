const Item = ({producto}) => {
    return (
        <div className="card border-0 my-3">
            <img src={producto.image} className="img-fluid" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>
            </div>
        </div>
    )
}

export default Item;