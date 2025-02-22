import { useState,useEffect, useRef } from "react";

function StopWatch() {
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        
    }, [isRunning]); //this is where we keep track of the running time

    function start(){

    }

    function stop() {
        
    }

    function reset() {
        
    }

    function formatTime() {
        
    }
    return (
        <di8v className="StopWatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={{start}} className="start-button">Start</button>
                <button onClick={{reset}} className="reset-button">eset</button>
            </div>
       </di8v>
    )
}

export default StopWatch;