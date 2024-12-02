import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('Your name here');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="text" value={qu} onChange={handleQuantity } />
            <p>quantity: {quantity}</p>
            
        </div>
    )
}

export default ChangeHandler;