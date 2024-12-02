import React,{useState} from "react";

function MyComponent() {
    const [name, setName] = useState();

    const updateName = () => {
        
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button>Se</button>
        </div>
    )
}

export default MyComponent;