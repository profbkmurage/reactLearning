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
            div.display
       </di8v>
    )
}

export default StopWatch;