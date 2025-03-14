import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
    )
}

export default ChangeHandler;