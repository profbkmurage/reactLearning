import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function 

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
    )
}

export default ChangeHandler;