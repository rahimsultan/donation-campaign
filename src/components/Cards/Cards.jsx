import React from 'react'
import Card from '../Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 lg:gap-10 gap-5'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cards