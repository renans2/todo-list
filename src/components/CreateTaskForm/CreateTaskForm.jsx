import './CreateTaskForm.css'

export default function CreateTaskForm({ addTaskFunc }){
    const aggregateTask = () => {
        return {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            priority: document.getElementById("priority").value,
            created_at: Date.now()
        }
    }

    return(
        <>
            <form id="task-form">
                <label htmlFor="title">
                    Title: 
                    <input type="text" name="title" id="title" />
                </label>
                <br />
                
                <label htmlFor="description">
                    Description: 
                    <textarea name="description" id="description"></textarea>
                </label>
                
                <br />
                <label htmlFor="priority">
                    Priority: 
                    <select name="priority" id="priority">
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </label>

                <button onClick={(e) => {
                    e.preventDefault();
                    addTaskFunc(aggregateTask())
                }}>Create task</button>
                <button>Cancel</button>
            </form>
        </>
    );
}
