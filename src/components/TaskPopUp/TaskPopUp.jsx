import { useContext } from "react"
import { AppContext } from "../../App"
import styles from "./TaskPopUp.module.css"

export default function TaskPopUp({ task }){
    const { closeTaskPopUp } = useContext(AppContext)

    return(
        <div className={styles.blurred}>
            <div className={styles.container}>
                <button className={styles.closeButton} onClick={closeTaskPopUp}>X</button>
                <h1>{task.title}</h1>
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>Created at: {task.created_at}</p>
            </div>
        </div>
    )
}
