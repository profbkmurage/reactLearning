import { useState } from "react";

function UpdaterFunction() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Ford",
        model: "mustang"
    })

    return (
        <div>
            <p>Your favourite car is : {car.year} {car.model} {car.make}</p>
            {/* the goal here is to have the data in the paragraph change  */}
        </div>
    )
}

export default UpdaterFunction;