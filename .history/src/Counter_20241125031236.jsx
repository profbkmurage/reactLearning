import  { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter++);
    }

    const decrement = () => {
        setCounter(counter--);
    }

    const reset = () => {
        setCounter(0);
    }
    
    
}

export default Counter