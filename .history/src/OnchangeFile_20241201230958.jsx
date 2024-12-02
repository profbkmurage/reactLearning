import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        set
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
    )
}

export default ChangeHandler;