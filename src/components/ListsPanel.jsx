import ListCard from './ListCard';

export default function ListsPanel({ lists }){
    return(
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-2 mt-10'>
            {lists.map((list, index) => <ListCard key={index}
                                                  list={list} />)}
        </div>
    )
}
