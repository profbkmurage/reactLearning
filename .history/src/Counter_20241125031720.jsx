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
            <button className="counter-decrease">Deacrese</button>
            <button className="rese">rese</button>
            <button className="counter-decrease">Deacrese</button>
        </div>
    )
    
}

export default Counter