import { useState } from "react";

function UpdaterFunction() {
    const [car, setCar] = useState({
        year: 2025,
        make: "Ford",
        model: "mustang"
    })

    function handleYearChange(event) {
        setCar(c => ({ ...c, year: event.target.value }));
        // the spread operator ...car must be used so that when updating, the car object retains the other property other than the year preoperty
}
    function handleModelChange(event) {
        setCar(c => ({ ...c, make: event.target.value }));
}
    function handleMakeChange(event) {
    setCar(c=> ({...c, }))
}

    return (
        <div>
            <p>Your favourite car is : {car.year} {car.model} {car.make}</p>
            {/* the goal here is to have the data in the paragraph change depending on what the user wants, so we need to have some inputs */}
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
             
            <input type="text" value={car.make}onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
}

export default UpdaterFunction;