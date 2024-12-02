import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" value={name} onChange={ha} />
        </div>
    )
}

export default ChangeHandler;