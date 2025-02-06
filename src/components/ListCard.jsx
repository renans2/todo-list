import { Link } from 'react-router-dom';

export default function ListCard({ list }){
    return(
        <Link className='flex items-center bg-gray-600 p-3 rounded-2xl h-20 text-2xl hover:bg-gray-400' to={`/${list.name}`}>
            <div className='flex-1'>
                <h3>{list.name}</h3>
                <p className='text-sm'>Created at: {list.created_at}</p>
            </div>
        </Link>
    )
}