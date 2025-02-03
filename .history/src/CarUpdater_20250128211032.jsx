import { useState } from "react";

function CarUpdater() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, steCarModel] = useState('')

    // function to add car and remove it
    function handleAddCar() {
        
    }

    function handleRemoveCar(index) {
        
    }
    // ?function to add year
    function handleYearChange(event) {
        
    }

    // function to add make
    function handleMakeChange() {
        
    }
    // function to add model
    function handleModelChange() {
        
    }
    return (
        <div>
            <h2>list of car objects</h2>
            <ul>

            </ul>
        <input type="number" value= {carYear} onChange={{handleYearChange}} /><br/>
        <input type="text" placeholder="Enter your car model" value= {carModel} onChange={{handleModelChange}} /><br/>
 
        </div>
    );
}

export default CarUpdater