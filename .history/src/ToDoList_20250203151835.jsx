import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        
    }
    
    return (
        <div className="to-do-list">

        </div>
    );
}

export default ToDoList;