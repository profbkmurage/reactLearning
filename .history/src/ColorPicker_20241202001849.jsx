import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        set
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label htmlFor="">Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker;