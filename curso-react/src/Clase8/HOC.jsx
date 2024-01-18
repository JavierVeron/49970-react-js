import { useState } from "react";

const Comp2 = ({prop1, prop2}) => {
    return (
        <>
            <h2>{prop1 ? "Soy un Componente!" : ""}</h2>
            <button className="btn btn-secondary" onClick={prop2}>Visible / No Visible</button>
        </>
    )
}

const HOC = () => {
    const [visible, setVisible] = useState(true);

    const hacerVisible = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true);
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Comp2 prop1={visible} prop2={hacerVisible} />
                </div>
            </div>
        </div>
    )
}

export default HOC;