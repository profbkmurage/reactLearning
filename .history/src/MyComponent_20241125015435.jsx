import {useState} from "react";

function MyComponent() {
    const [name, setName] = useState();
    const [age]

    const updateName = () => {
        setName('Oswad Coberpolt')
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    )
}

export default MyComponent;