import { useState } from "react";

function CarUpdater() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake]= useState()
}

export default CarUpdater