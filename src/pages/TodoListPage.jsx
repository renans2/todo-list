import { useEffect, useState, createContext } from "react";
import { useParams, useNavigate } from "react-router";
import CreateTaskButton from '../components/CreateTaskButton'
import CreateTaskForm from '../components/CreateTaskForm'
import TodoList from '../components/TodoList'

export const Context = createContext();

export default function TodoListPage(){
    const navigate = useNavigate()
    const { listName } = useParams();

    const [tasks, setTasks] = useState(() => {
        const localTasks = JSON.parse(localStorage.getItem("lists"))
                               .find(list => list.name === listName)
        return localTasks === undefined ? null : localTasks.tasks
    })
    
    const [showPopUp, setShowPopUp] = useState(false)

    useEffect(() => {
        if(tasks === null)
            navigate("/")
    }, [])

    useEffect(() => {
        const lists = JSON.parse(localStorage.getItem("lists"))
        const updated = lists.map(list => list.name === listName ? {...list, tasks: tasks} : list)
        
        localStorage.setItem("lists", JSON.stringify(updated))
    }, [tasks])
        
    const handleRemoveTask = (index) => setTasks(c => c.filter((_, i) => index !== i))
    const handleAddTask = (newTask) => setTasks(c => [...c, newTask])
    const closeCreateTaskPopUp = () => setShowPopUp(false)
    const showCreateTaskPopUp = () => setShowPopUp(true)

    if(tasks === null){
        return
    }

    return(
        <Context.Provider value={{tasks, handleAddTask, handleRemoveTask, closeCreateTaskPopUp, showCreateTaskPopUp}}>
            <main className='mt-10'>
                <CreateTaskButton/>
                {showPopUp && <CreateTaskForm />}
                {tasks.length === 0 && <h1 className='text-6xl font-bold mt-10 text-center'>No tasks!</h1>}
                <TodoList />
            </main>
        </Context.Provider>
    )
}
