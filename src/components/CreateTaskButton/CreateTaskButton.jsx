import styles from './CreateTaskButton.module.css'
import { AppContext } from '../../App';
import { useContext } from 'react';

export default function CreateTaskButton(){
    const { showCreateTaskPopUp } = useContext(AppContext)

    return(
        <div className={styles.div}>
            <button className={styles.button} onClick={showCreateTaskPopUp}>+ Create new task</button>
        </div>
    );
}
