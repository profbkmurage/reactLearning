import { useState,useEffect, useRef } from "react";

function StopWatch() {
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100);
        }
        return () => {
            clearInterval(intervalIDRef.current);
        }
    }, [isRunning]); //this is where we keep track of the running time

    function start(){
        setRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setRunning(false)
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 )% 60);
        let seconds = Math.floor(elapsedTime / (1000)% 60);
        let milliseconds = Math.floor((elapsedTime % 1000) % 100);
        
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(, '0');

        return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`

    }
    return (
        <div className="outer-body">
            <div className="StopWatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button onClick={start} className="start-button">Start</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                    <button onClick={stop} className="stop-button">Stop</button>
                </div>
            </div>
    </div>
    )
}

export default StopWatch;