import './Task.css'

export default function Task({ task, removeTask, setShowTask }){
    return(
        <li className="task-div">
            <p id='task-title'>{task.title}</p>
            {/* <p>Description: {task.description}</p> */}
            <p>Priority: {task.priority}</p>
            <p>Created at: {task.created_at}</p>
            <button onClick={setShowTask}>show details</button>
            <button id='remove-task' onClick={removeTask}>remove</button>
        </li>
    );
}
