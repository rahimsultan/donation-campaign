import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const datas = useLoaderData();
    const {id} = useParams();
    const [card, setCard]= useState('')
    // console.log(id);

    useEffect(()=>{
        const item = datas.find(data=> data.id === id);
        setCard(item)
    },[])
    console.log(card);
    const { image, title, card_bg, btn_bg, text_bg, category, price, description} = card

  return (
    <div className="mt-28 max-w-7xl mx-auto lg:px-8">
        <div className="h-[55vh] relative">
            <img className="h-full w-full object-cover" src={image} alt="" />
            <div className="absolute bg-black opacity-60 bottom-0 h-[100px] right-0 left-0">
            </div>
                <button
                style={{backgroundColor:text_bg}}
                    type="button"
                    className="rounded-md z-30 absolute bottom-8 left-10 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                    {price}
                </button>
        </div>
        <div>
            <h2 className="text-2xl font-bold mt-5 mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Details