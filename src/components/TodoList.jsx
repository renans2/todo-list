import Task from "./Task"
import { useContext } from "react"
import { Context } from "../pages/TodoListPage"

export default function TodoList(){
    const { tasks, handleRemoveTask, showTaskPopUp } = useContext(Context)

    return(
        <ul className="mt-10">
            {tasks.map((task, index) => 
                <Task key={index} 
                      task={task} 
                      removeTask={() => handleRemoveTask(index)}
                      setShowTask={() => showTaskPopUp(index)} 
                />)}
        </ul>
    )
}
