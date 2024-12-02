import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected color: {color</p>
            </div>
        </div>
    )
}

export default ColorPicker;