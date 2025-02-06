import { useState, useEffect } from 'react'
import ListsPanel from '../components/ListsPanel';

export default function HomePage(){
    const [lists, setLists] = useState(() => {
        const localLists = localStorage.getItem("lists")
        return localLists == null ? [] : JSON.parse(localLists)
    })

    // const [lists, setLists] = useState([
    //     "Trabalho",
    //     "Estudos",
    //     "Compras",
    //     "Projetos",
    //     "Viagens",
    //     "Filmes para assistir",
    //     "Livros para ler",
    //     "Exercícios",
    //     "Metas do Ano",
    //     "Eventos"
    // ])

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(lists))
    }, [lists])
    
    const handleCreateNewList = () => {
        const newListName = document.getElementById("input-list").value.trim()
        
        if(!newListName){
            alert("The list name cannot be empty")
            return
        }

        document.getElementById("input-list").value = ""
        
        const newList = {
            name: newListName,
            created_at: new Date().toLocaleDateString(),
            tasks: []
        }
        
        setLists(c => [...c, newList])
    }

    return(
        <div className='mt-10'>
            <div className='flex justify-end items-center'>
                <input placeholder='New list name' className='bg-white text-black p-1 rounded-xs text-xl' type="text" id='input-list' />
                <button className='hover:bg-gray-400 bg-gray-600 ml-6 px-4 py-2 rounded-3xl text-2xl cursor-pointer' onClick={handleCreateNewList} >create new list</button>
            </div>
            {/* <h1 className='text-4xl'>Your Lists: </h1> */}
            <ListsPanel lists={lists}/>
        </div>
    )
}