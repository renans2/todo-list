import { AppContext } from '../App';
import { useContext } from 'react';

export default function CreateTaskButton(){
    const { showCreateTaskPopUp } = useContext(AppContext)

    return(
        <button className='transition duration-150 bg-gray-700 p-4 w-full rounded-full hover:bg-gray-500 cursor-pointer text-2xl font-bold' 
                onClick={showCreateTaskPopUp}>
            + Create new task
        </button>
    );
}
