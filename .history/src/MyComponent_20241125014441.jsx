import React,{useState} from "react";

function MyComponent() {
    const [name, setName] = useState();

    const updateName = () => {
        
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button>Set </button>
        </div>
    )
}

export default MyComponent;