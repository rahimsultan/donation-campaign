import { Link } from "react-router-dom"


const DonatonCard = ({item}) => {
    const {id, image, title, card_bg, btn_bg, text_bg, category, price} = item
  return (
    <div className="flex items-center gap-10 overflow-hidden rounded-md" style={{backgroundColor:card_bg}}>
        <div className="w-[40%] h-[100%]">
            <img className="h-full object-cover" src={image} alt="" />
        </div>
        <div className="py-4">
        <button
        style={{backgroundColor:btn_bg, color:text_bg}}
          type="button"
          className=" rounded-sm px-2.5 py-1 text-[10px] font-semibold shadow-sm"
        >
          {category}
        </button>
        <h1 className=" mt-2 text-lg font-semibold">{title}</h1>
        <p className="font-bold" style={{color:text_bg}}>${price}</p>
        <Link to={`/${category}/${id}`}>
        <button
                style={{backgroundColor:text_bg}}
                    type="button"
                    className="rounded-md text-white mt-2 px-3 py-2 text-sm font-semibold shadow-sm"
                >
                    View Details
        </button>
        </Link>
        </div>
    </div>
  )
}

export default DonatonCard