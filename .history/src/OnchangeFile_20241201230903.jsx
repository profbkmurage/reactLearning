import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" value={name} onChange={handleNa} />
        </div>
    )
}

export default ChangeHandler;