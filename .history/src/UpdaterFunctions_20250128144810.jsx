import { useState } from "react";

function UpdaterFunction() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Ford",
        model: "mustang"
    })

    return (
        <div>
            <p>Your favourite car is : {car.year} {car.model} </p>
        </div>
    )
}

export default UpdaterFunction;