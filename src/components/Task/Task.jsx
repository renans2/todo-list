import styles from './Task.module.css'

export default function Task({ task, removeTask, setShowTask }){
    return(
        <li className={styles.taskDiv}>
            <span className={styles.title}>{task.title}</span>
            {/* <p>Description: {task.description}</p> */}
            <div className={styles.priorityDiv}>
                <span className={styles[task.priority]}>{task.priority}</span>
            </div>
            {/* <span>Created at: {task.created_at}</span> */}
            <button className={styles.detailsButton} onClick={setShowTask}>show details</button>
            <button className={styles.removeTaskButton} onClick={removeTask}>remove</button>
        </li>
    );
}
