import  { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter++);
    }

    
    
}

export default Counter