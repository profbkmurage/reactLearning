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
            {/* the goal here is to have the data in the paragraph change depending on what the user wants, so we need to have some inputs */}
            <input type="number" value={car.year}><br>
            <input type="text" value={car.make}><br>
             />
        </div>
    )
}

export default UpdaterFunction;