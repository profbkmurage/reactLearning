import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('Your ');

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