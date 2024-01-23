import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({page}) => {
    const [pagina, setPagina] = useState("");

    useEffect(() => {
        setPagina(page);
    }, [page])

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                {page ? <li className="breadcrumb-item active" aria-current="page">{pagina}</li> : "" }
            </ol>
        </nav>
    )
}

export default Breadcrumb;