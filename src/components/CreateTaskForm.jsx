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
        <div className='w-screen h-screen bg-black/20 fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center'>
            <form className='w-150 bg-gray-800 py-8 px-7 border-2 border-gray-500 rounded-2xl flex flex-col justify-center' 
                  onSubmit={handleSubmit}>
                <h1 className='text-center font-bold text-3xl'>Create new task</h1>

                <label className='form-label' htmlFor="title">Title:</label>
                <input className='form-input' required type="text" name="title" id="title" />
                
                <label className='form-label' htmlFor="priority">Priority:</label>
                <select className='form-input' required name="priority" id="priority">
                    <option value="">choose...</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>

                <div className='mt-10 flex w-full justify-between items-center'>
                    <button className='form-button cancel-button' onClick={closeCreateTaskPopUp} type='button'>Cancel</button>
                    <button className='form-button submit-button' type="submit">Create task</button>
                </div>
            </form>
        </div>
    );
}
