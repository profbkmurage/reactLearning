import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        
    },[])

    return (
        <div className="clock-body">
        <div className="clock-container">
            <div className="clock">
                <span>
                    00:00:00
                </span>
            </div>
            </div>
            </div> 
    );
}

export default DigitalClock;