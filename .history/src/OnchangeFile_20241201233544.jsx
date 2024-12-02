import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('Your name here');
    const [quantity, setQuantity] = useState(0);
    const 

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

            <input type="number" value={quantity} onChange={handleQuantity } />
            <p>quantity: {quantity}</p>
            
        </div>
    )
}

export default ChangeHandler;