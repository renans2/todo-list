import React, { useState, useEffect, createContext } from 'react'
import CreateTaskButton from './components/CreateTaskButton'
import CreateTaskForm from './components/CreateTaskForm'
import TodoList from './components/TodoList'

const key = 'todoList'
export const AppContext = createContext(); 

function App() {
    const [todoList, setTodoList] = useState(() => {
        const localTodoList = localStorage.getItem(key)
        return localTodoList == null ? [] : JSON.parse(localTodoList)
    });

    const [showPopUp, setShowPopUp] = useState(false)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todoList))
    }, [todoList])
    
    const handleRemoveTask = (index) => {
        setTodoList(c => c.filter((_, i) => index !== i))
    }

    const handleAddTask = (newTask) => setTodoList(c => [...c, newTask])
    const closeCreateTaskPopUp = () => setShowPopUp(false)
    const showCreateTaskPopUp = () => setShowPopUp(true)

    return (
        <AppContext.Provider value={{todoList, handleAddTask, handleRemoveTask, closeCreateTaskPopUp, showCreateTaskPopUp}}>
            {/* content wrapper */}
            <div className='px-12 xl:px-64 py-4 font-roboto bg-gray-900 text-white h-screen'>
                <header>
                    <h1 className='text-6xl font-bold inline-block mr-3'>Todo List</h1>
                    <span className='text-4xl text-blue-200 font-light'>(with React and Tailwind)</span>
                    <span className='text-2xl font-light block'>
                        by <a target='_blank' className='text-blue-200 underline hover:text-blue-400' 
                              href="https://github.com/renans2">@renans2</a>
                    </span>
                </header>
                
                <main className='mt-10'>
                    <CreateTaskButton/>
                    {showPopUp && <CreateTaskForm />}
                    {(todoList.length === 0 && <h1 className='text-6xl font-bold mt-10 text-center'>No tasks!</h1>)}
                    <TodoList />
                </main>
            </div>
        </AppContext.Provider>
    )
}

export default App
