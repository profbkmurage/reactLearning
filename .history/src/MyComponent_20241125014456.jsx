import React,{useState} from "react";

function MyComponent() {
    const [name, setName] = useState();

    const updateName = () => {
        
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button oncl>Set Name</button>
        </div>
    )
}

export default MyComponent;