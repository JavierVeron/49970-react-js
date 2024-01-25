import React, { useState } from "react";

const Select = ({options, onSelect, defaultOption}) => {
    return (
        <select onChange={(e) => {onSelect(e.target.value)}} defaultValue={defaultOption}>
            {options.map(item =>
                <option key={item.value} value={item.value}>{item.text}</option>    
            )}
        </select>
    )
}

const Abstraccion1 = () => {
    const [option, setOption] = useState(2);
    const options = [{value:1, text:"Azul"}, {value:2, text:"Rojo"}, {value:3, text:"Rosa"}];

    const optionSelected = (value) => {
        setOption(value);
    }

    return (
        <div className="m-5">
            <h1>Abstracción #1</h1>
            <Select options={options} onSelect={optionSelected} defaultOption={option} />
            <p>Opción seleccionada: {option}</p>
        </div>
    )
}

export default Abstraccion1;