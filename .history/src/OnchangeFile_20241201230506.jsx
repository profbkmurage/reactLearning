import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" value={name}  />
        </div>
    )
}

export default ChangeHandler;