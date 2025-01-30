import styles from './Task.module.css'

export default function Task({ task, removeTask }){
    return(
        <li className={styles.taskDiv}>
            <span className={styles.title}>{task.title}</span>
            <div className={styles.priorityDiv}>
                <span className={styles[task.priority]}>Priority: {task.priority}</span>
            </div>
            <span className={styles.createdAt} >Created at: {task.created_at}</span>
            <button className={styles.removeTaskButton} onClick={removeTask}>Done <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button>
        </li>
    );
}
