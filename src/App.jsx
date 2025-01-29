import { useState, useEffect } from 'react'
import Task from './components/Task/Task'
import CreateTaskButton from './components/CreateTaskButton/CreateTaskButton'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

const key = 'todoList'

const tasks = [
    {
        title: 'Wash clothes',
        description: "go to laundry and wash clothes for the week",
        priority: 'medium',
        created_at: Date.now()
    }
]

function App() {
    const [todoList, setTodoList] = useState(() => {
        const localTodoList = localStorage.getItem(key)
        return localTodoList == null ? [] : JSON.parse(localTodoList)
    });

    // const [todoList, setTodoList] = useState(tasks);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todoList))
    }, [todoList])

    const handleAddTask = (newTask) => {
        setTodoList(c => {
            return [...c, newTask];
        })
    }

    return (
        <>
            <CreateTaskButton />
            <CreateTaskForm addTask={handleAddTask} />
            <TodoList todoList={todoList} />
        </>
    )
}

export default App
