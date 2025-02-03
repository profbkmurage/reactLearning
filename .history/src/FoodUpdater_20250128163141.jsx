import { useState } from "react";

function FoodUpdater() {
    function handleAddFood(event) {
        
    }
    function handleRemoveFood(event) {
        
    }

    return (
        <div>
            <h1>Food list to be updated</h1>
            <ul>
                {foods.map((food, index))}
            </ul>
        </div>
    )
    
}

export default FoodUpdater;