import React, { useState, useEffect, createContext } from 'react'
import CreateTaskButton from './components/CreateTaskButton/CreateTaskButton'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

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
            <h1>Todo List by <a href="https://github.com/renans2">@renans2</a></h1>
            <CreateTaskButton/>
            {showPopUp && <CreateTaskForm />}
            {(todoList.length === 0 && <h1>No tasks!</h1>) || <TodoList />}
        </AppContext.Provider>
    )
}

export default App
