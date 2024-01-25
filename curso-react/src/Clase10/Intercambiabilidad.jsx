import React from "react";

const InputCount = ({OnConfirm, MaxQuantity}) => {
    return (
        <input type="text" onChange={OnConfirm} value={MaxQuantity} />
    )
}

const ButtonCount = ({OnConfirm, MaxQuantity}) => {
    return (
        <button onClick={OnConfirm}>{MaxQuantity}</button>
    )
}

const Intercambiabilidad = ({item, inputType='button'}) => {
    const Count = inputType === 'button' ? ButtonCount : InputCount;

    const addToCart = (item) => {
        if (item > 0) {
            console.log("Agregaste: " + item + " items!");
        }
    }

    return (
        <div className="m-5">
            <h1>Intercambiabilidad</h1>
            <Count OnConfirm={() => {addToCart(item)}} MaxQuantity={item} />
        </div>
    )
}

export default Intercambiabilidad;