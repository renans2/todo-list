import Task from "../Task/Task"

export default function TodoList({ todoList }){
    
    return(
        <ul>
            {todoList.map((task, index) => <Task key={index} task={task} />)}
        </ul>
    )
}
