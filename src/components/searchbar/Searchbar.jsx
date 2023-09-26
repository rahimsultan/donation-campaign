import React, { useContext, useRef } from 'react';
import SearchContext from '../Context/SearchContext';

export function Searchbar({datas}) {
  const input = useRef()

  const {setData} = useContext(SearchContext)
  // console.log(setData);

  const handleSearch =()=>{
    const value = input.current.value.toLowerCase()
    const itemArr =[]
    for(const data of datas){
      if(value === data.category.toLowerCase() || data.category.toLowerCase().includes(value)){
        itemArr.push(data)
      }
    }
    setData(itemArr)
  }

  return (
    <div className="flex max-w-full items-center space-x-2 z-20">
      <input
      ref={input}
        className="flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="search..."
      ></input>
      <button
      onClick={handleSearch}
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
    </div>
  )
}
