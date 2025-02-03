import { useState } from "react";

function FoodUpdater() {
    const [foods, setFoods] = useState(['Apple', 'Banana', 'orange', 'pearch']);

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        
        setFoods(f => [...f, newFood]);

    }
    function handleRemoveFood(index) {
        
    }

    return (
        <div>
            <h1>Food list to be updated</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick=>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter your favourite food to add to list" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
    
}

export default FoodUpdater;