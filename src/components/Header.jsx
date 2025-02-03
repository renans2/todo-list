

export default function Header(){
    return(
        <header>
            <h1 className='text-6xl font-bold inline-block mr-3'>Todo List</h1>
            <span className='text-4xl text-blue-200 font-light'>(with React and Tailwind)</span>
            <span className='text-2xl font-light block'>
                by <a target='_blank' className='text-blue-200 underline hover:text-blue-400' 
                        href="https://github.com/renans2">@renans2</a>
            </span>
        </header>
    )
}