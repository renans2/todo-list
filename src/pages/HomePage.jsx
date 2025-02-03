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
        <div>
            <h1 className='mt-4 text-4xl'>Your List: </h1>
            <button onClick={handleCreateNewList} >create new list</button>
            <input className='bg-white text-black' type="text" id='input-list' />
            <ListsPanel lists={lists} />
        </div>
    )
}