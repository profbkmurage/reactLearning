import {useState} from "react";

function MyComponent() {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateName = () => {
        setName('Oswad Coberpolt')
    }

    const increment

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    )
}

export default MyComponent;