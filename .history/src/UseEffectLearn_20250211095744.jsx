import { useState, useEffect } from "react";

function ComponetMain() {
    const [count, setCount] = useState(0);

    // useeffect should be placed near the top
    useEffect(() => {
        document
    })

    function addCount() {
        setCount(c => c + 1);
    }
    
    return (
        <div>
            <p>Count: </p>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default ComponetMain;