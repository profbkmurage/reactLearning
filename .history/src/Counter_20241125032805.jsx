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
            <button onClick={decrement} className="butt counter-decrease">Deacrese</button>
            <button onClick={reset} className="butt reset">reset</button>
            <button onClick={increment} className="butt increase">increase</button>
        </div>
    )
    
}

export default Counter