import {useState} from "react";

function MyComponent() {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateName = () => {
        setName('Oswad Coberpolt')
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toogleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={updateage}>Set age</button>
            
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    )
}

export default MyComponent;