import styles from './CreateTaskForm.module.css'
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function CreateTaskForm(){
    const { closeCreateTaskPopUp, handleAddTask } = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const title = formData.get("title").trim()

        if(!title){
            alert('The title cannot be empty.')
            return
        }

        const newTask = {
            title,
            description: formData.get("description").trim(),
            priority: formData.get("priority"),
            created_at: new Date().toLocaleDateString()
        }

        handleAddTask(newTask)
        closeCreateTaskPopUp()
    }

    return(
        <div className={styles.blurred}>
            <form onSubmit={handleSubmit} className={styles.taskForm}>
                <label htmlFor="title">Title: </label>
                <input required type="text" name="title" id="title" />
                
                <label htmlFor="description">Description (optional): </label>
                <input type="text" name="description" id="description"></input>
                
                <label htmlFor="priority">Priority: </label>
                <select required name="priority" id="priority">
                    <option value="">choose...</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>

                <div className={styles.buttonsDiv}>
                    <button className={styles.createButton} type="submit">Create task</button>
                    <button className={styles.cancelButton} onClick={closeCreateTaskPopUp} type='button'>Cancel</button>
                </div>
            </form>
        </div>
    );
}
