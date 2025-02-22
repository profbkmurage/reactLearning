import { useState,useEffect, useRef } from "react";

function StopWatch() {
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        
    }, [isRunning]); //this is where we keep 
    return (
        <>
        </>
    )
}

export default StopWatch;