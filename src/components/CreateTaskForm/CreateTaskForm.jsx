import './CreateTaskForm.css'

export default function CreateTaskForm({ addTask }){
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get("title").trim();

        if(!title){
            alert('The title cannot be empty.');
        }

        const newTask = {
            title,
            description: formData.get("description").trim(),
            priority: formData.get("priority"),
            created_at: new Date().toLocaleDateString()
        }

        addTask(newTask);
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="task-form">
                <label htmlFor="title">Title: </label>
                <input required type="text" name="title" id="title" />
                <br />
                
                <label htmlFor="description">Description (optional): </label>
                <textarea name="description" id="description"></textarea>
                
                <br />
                <label htmlFor="priority">Priority: </label>
                <select required name="priority" id="priority">
                    <option value="">choose...</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>

                <div className='form-buttons'>
                    <button id='create-button' type="submit">Create task</button>
                    <button id='cancel-button' type='button'>Cancel</button>
                </div>
            </form>
        </>
    );
}
