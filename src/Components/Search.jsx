import React,{useRef} from 'react'

const Search = (props) => {
  const searchInput = useRef();
  return (
    <div className='flex shadow-lg'>
        <input type="search" value={props.searchData} 
         className="border border-black w-full p-3 text-2xl" 
          onChange={() => props.eventHandler(searchInput.current.value)}
          ref={searchInput}
        />
        <button onClick={props.searchWeather} className='p-3 bg-slate-600 text-white'>Search</button>
    </div>
  )
}

export default Search