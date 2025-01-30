import React, { useState, useEffect, createContext } from 'react'
import CreateTaskButton from './components/CreateTaskButton/CreateTaskButton'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import TodoList from './components/TodoList/TodoList'
import TaskPopUp from './components/TaskPopUp/TaskPopUp'
import './App.css'

const key = 'todoList'
export const AppContext = createContext(); 

function App() {
    const [todoList, setTodoList] = useState(() => {
        const localTodoList = localStorage.getItem(key)
        return localTodoList == null ? [] : JSON.parse(localTodoList)
    });

    const [showPopUp, setShowPopUp] = useState(false)
    const [showTask, setShowTask] = useState()

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todoList))
    }, [todoList])
    
    const handleRemoveTask = (index) => {
        setTodoList(c => c.filter((_, i) => index !== i))
        closeTaskPopUp()
    }

    const handleAddTask = (newTask) => setTodoList(c => [...c, newTask])
    const closeCreateTaskPopUp = () => setShowPopUp(false)
    const showCreateTaskPopUp = () => setShowPopUp(true)
    const closeTaskPopUp = () => setShowTask(-1);
    const showTaskPopUp = (index) => setShowTask(index)

    return (
        <AppContext.Provider value={{todoList, handleAddTask, handleRemoveTask, closeCreateTaskPopUp, showCreateTaskPopUp, closeTaskPopUp, showTaskPopUp}}>
            <h1>Todo List</h1>
            <CreateTaskButton/>
            {showPopUp && <CreateTaskForm />}
            {showTask >= 0 && <TaskPopUp task={todoList[showTask]} />}
            {(todoList.length === 0 && <h1>No tasks!</h1>) || <TodoList />}
        </AppContext.Provider>
    )
}

export default App
