import { useState } from "react";

function ChangeHandler() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default ChangeHandler;