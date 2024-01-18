import { useState } from "react";

const useCount = (initial, min, max) => {
    const [counter, setCounter] = useState(initial);

    const reset = () => {
        setCounter(initial);
    }

    const increment = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > min) {
            setCounter(counter - 1);
        }
    }
 
    return {counter, reset, increment, decrement}
}

export default useCount;