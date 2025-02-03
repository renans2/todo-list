import { Link } from 'react-router-dom';

export default function ListCard({ list }){
    return(
        <Link className='bg-gray-600 p-3 rounded-2xl h-20 text-2xl hover:bg-gray-400' to={`/${list.name}`}>
            {list.name}
            <p className='text-sm'>Created at: {list.created_at}</p>
        </Link>
    )
}