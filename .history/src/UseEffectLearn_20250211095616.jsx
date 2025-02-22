import { useState, useEffect } from "react";

function ComponetMain() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(c => c + 1);
    }
    
    return (
        <div>
            <p>Count</p>
        </div>
    )
}

export default ComponetMain;