import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  const {id, image, title, card_bg, btn_bg, text_bg, category} = data
  return (
    <Link to={`/${category}/${id}`}>
    <div className=" rounded-md border" style={{backgroundColor:card_bg, color:text_bg}}>
      <img
        src={image}
        alt={category}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <button
        style={{backgroundColor:btn_bg, color:text_bg}}
          type="button"
          className=" rounded-sm px-2.5 py-1 text-[10px] font-semibold shadow-sm"
        >
          {category}
        </button>
        <h1 className=" mt-2 text-lg font-semibold">{title}</h1>
      </div>
    </div>
    </Link>
  )
}

export default Card