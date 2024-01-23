import { Link, NavLink } from "react-router-dom";

const Titulo9 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"}>
                        <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/unnamed-512x375.png" width={180} alt={"McDonalds"} />
                    </Link>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Página Principal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/categoria/hamburguesas"}>Hamburguesas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/categoria/papas"}>Papas Fritas</NavLink>
                        </li>
                    </ul>
                </div>    
            </div>    
        </div>
    )
}

export default Titulo9;