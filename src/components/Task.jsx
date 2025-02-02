
export default function Task({ task, removeTask }){
    return(
        <li>
            <span>{task.title}</span>
            <div>
                <span>Priority: {task.priority}</span>
            </div>
            <span>Created at: {task.created_at}</span>
            <button onClick={removeTask}>Done</button>
        </li>
    );
}
