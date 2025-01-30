import { useContext } from "react"
import { AppContext } from "../../App"

export default function TaskPopUp({ task }){
    const { closeTaskPopUp } = useContext(AppContext)

    return(
        <div>
            <p>Task: {task.title}</p>
            <button onClick={closeTaskPopUp}>X</button>
        </div>
    )
}
