
export default function Task({ task, removeTask }){
    return(
        <li className="task">
            {/* title & creation date */}
            <div className="flex-1 overflow-hidden">
                <span className="block text-2xl font-bold">{task.title}</span>
                <span className="font-light text-xl">Created at: {task.created_at}</span>
            </div>

            {/* priority */}
            <div className="flex w-25 justify-center">
                <span className={`${task.priority}-priority uppercase rounded-full px-2 font-bold`}>{task.priority}</span>
            </div>

            {/* button */}
            <button className="h-10 ml-4 px-4 bg-gray-500 font-bold uppercase rounded-full cursor-pointer hover:bg-green-700"
                    onClick={removeTask}>Done</button>
        </li>
    );
}
