import { useState } from "react";

function CarUpdater() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
}

export default CarUpdater