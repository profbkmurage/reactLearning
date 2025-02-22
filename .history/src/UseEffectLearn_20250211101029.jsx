import { useState, useEffect } from "react";

function ComponetMain() {
    const [count, setCount] = useState(0);

    // useeffect should be placed near the top
    useEffect(() => {
        document.title = `count: ${count}`;
    },[count]) //the second argument is a dependacy which tells react to update our title only when ther dependacy changes

    function addCount() {
        setCount(c => c + 1);
    }
    
    return (
        <div>
            <p>Count:{count} </p>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default ComponetMain;