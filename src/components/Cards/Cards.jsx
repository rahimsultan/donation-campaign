import React from 'react';
import Card from '../Card';

const Cards = ({datas}) => {
  // console.log(datas);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 lg:gap-10 gap-5'>
      {
        datas.map(data=> <Card key={data.id} data={data}/>)
      }
    </div>
  )
}

export default Cards