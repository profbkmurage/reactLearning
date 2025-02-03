import { useState } from "react";

function CarUpdater() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('')

    // function to add car and remove it
    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);
        setCarMake('');
        setCarModel('');
        setCarYear(new Date().getFullYear());
    }

    function handleRemoveCar(index) {
        setCars(c=> c.filter((element, i )=))
    }
    // ?function to add year
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    // function to add make
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    // function to add model
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    return (
        <div>
            <h2>list of car objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key= {index} onClick={()=>handleRemoveCar(index)} >
                        {car.year} {car.model} {car.make} 
                </li>
            )}
            </ul>;
        <input type="number" value= {carYear} onChange={handleYearChange} /><br/>;
        <input type="text" placeholder="Enter your car model" value= {carModel} onChange={handleModelChange} /><br/>;
        <input type="text" placeholder="Enter your car Make" value= {carMake} onChange={handleMakeChange} /><br/>;
        <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default CarUpdater