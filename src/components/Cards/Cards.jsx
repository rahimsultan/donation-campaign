import React, { useContext } from 'react';
import SearchContext from "../Context/SearchContext";
import Card from '../card/Card';

const Cards = () => {
  const {data} = useContext(SearchContext)
  return (
    data.length > 0 ?
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 lg:gap-10 gap-5'>
      {
        data.map(data=> <Card key={data.id} data={data}/>)
      }
    </div> : <div className='my-10'><h3 className='font-bold text-center text-xl'>No Data Matching to Your Search Result</h3></div>
  )
}

export default Cards