import Task from "../Task/Task"
import { useContext } from "react"
import { AppContext } from "../../App"

export default function TodoList(){
    const { todoList, handleRemoveTask, showTaskPopUp } = useContext(AppContext)

    return(
        <ul>
            {todoList.map((task, index) => 
                <Task key={index} 
                      task={task} 
                      removeTask={() => handleRemoveTask(index)}
                      setShowTask={() => showTaskPopUp(index)} 
                />)}
        </ul>
    )
}
