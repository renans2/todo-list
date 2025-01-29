import './Task.css'

export default function Task({ task }){
    return(
        <li className="task-div">
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Created at: {task.created_at}</p>
        </li>
    );
}
