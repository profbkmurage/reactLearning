import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    return (
        <div className="color-picker-container">
            <h1>ColorP</h1>
        </div>
    )
}

export default ColorPicker;