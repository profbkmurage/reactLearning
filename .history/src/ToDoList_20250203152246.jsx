import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.ta)
    }

    function addTask() {
        
    }

    function deleteTask(index) {
        
    }

    function moveTaskUp(index) {
        
    }

    function moveTaskDown(index) {
        
    }
    return (
        <div className="to-do-list">
            <input type="text" placeholder="Enter a task" value={newTask} onChange={()=>handleInputChange} />
        </div>
    );
}

export default ToDoList;