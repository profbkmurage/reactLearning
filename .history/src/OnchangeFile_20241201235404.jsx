import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('Your name here');
    const [quantity, setQuantity] = useState(0);
    const [paymentMode, setPaymentMode] = useState('Select only one');
    const [shippingMethod,setShipMethod] = useState('')

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }

    function handlePaymentMode() {
        setPaymentMode(event.target.value);
    }

    function handleShipment(event) {
        setShipMethod(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantity } />
            <p>quantity: {quantity}</p>

            <select name="" id="" value={paymentMode} onChange={handlePaymentMode}>
                <option value="">select one</option>
                <option value="visa">visa</option>
                <option value="master">master</option>
                <option value="giftCard">giftCard</option>
                <option value="mpesa">mpesa</option>
            </select>
            <p>Payment: {paymentMode}</p>
            <br />
            <label >
                <input type="radio" value='pick-up'  />
                pick up
            </label>
            <label >Delivery</label>

        </div>
    )
}

export default ChangeHandler;