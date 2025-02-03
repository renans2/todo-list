import HomePage from "./pages/HomePage"
import TodoListPage from "./pages/TodoListPage"
import Header from "./components/Header"
import { Routes, Route } from 'react-router'

function App() {

    return (
        <div className='px-12 xl:px-64 py-4 font-roboto bg-gray-900 text-white h-screen'>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:listName" element={<TodoListPage />} />
            </Routes>
        </div>
    )
}

export default App
