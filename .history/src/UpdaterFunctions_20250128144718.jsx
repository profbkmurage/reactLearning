import { useState } from "react";

function UpdaterFunction() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Ford",
        model: "mustang"
    })

    return (
        <div>
        <p></p>
        </div>
    )
}

export default UpdaterFunction;