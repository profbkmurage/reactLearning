import { useState } from "react";

function FoodUpdater() {
    const [foods, setFoods] = usestate(['Apple', 'Banana', 'orange', 'pearch']);

    function handleAddFood(event) {
        
    }
    function handleRemoveFood(event) {
        
    }

    return (
        <div>
            <h1>Food list to be updated</h1>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>

            <input type="text" />
        </div>
    )
    
}

export default FoodUpdater;