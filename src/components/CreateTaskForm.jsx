import { useContext } from 'react'
import { AppContext } from '../App'

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
            priority: formData.get("priority"),
            created_at: new Date().toLocaleDateString()
        }

        handleAddTask(newTask)
        closeCreateTaskPopUp()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create new task</h1>

                <label htmlFor="title">
                    Title: 
                    <input required type="text" name="title" id="title" />
                </label>
                
                <label htmlFor="priority">
                    Priority:
                    <select required name="priority" id="priority">
                        <option value="">choose...</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </label>

                <div>
                    <button type="submit">Create task</button>
                    <button onClick={closeCreateTaskPopUp} type='button'>Cancel</button>
                </div>
            </form>
        </div>
    );
}
