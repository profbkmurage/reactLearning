import React,{useState} from "react";

function MyComponent() {
    const [name, setName] = useState();

    const updateName = () => {
        
    }

    return (
        <div>
            <p>Name: {name}</p>
            
        </div>
    )
}

export default MyComponent;