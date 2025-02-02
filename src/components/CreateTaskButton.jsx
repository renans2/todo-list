import { AppContext } from '../App';
import { useContext } from 'react';

export default function CreateTaskButton(){
    const { showCreateTaskPopUp } = useContext(AppContext)

    return(
        <div>
            <button onClick={showCreateTaskPopUp}>+ Create new task</button>
        </div>
    );
}
