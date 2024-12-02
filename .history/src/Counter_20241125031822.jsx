import  { useState } from "react";

function Counter() {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter++);
    }

    const decrement = () => {
        setCounter(counter--);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div className="counter-div">
            <p className="count-display">{counter}</p>
            <button onClick={incrementAge} className="counter-decrease">Deacrese</button>
            <button onClick={incrementAge} className="reset">reset</button>
            <button onClick={incrementAge} className="increase">increase</button>
        </div>
    )
    
}

export default Counter