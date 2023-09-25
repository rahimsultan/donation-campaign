import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { getSavedItem, saveItemInLs } from "../../utility/localstorage";

const Details = () => {
    const datas = useLoaderData();
    const {id} = useParams();
    const [card, setCard]= useState('')

    useEffect(()=>{
        const item = datas.find(data=> data.id === id);
        setCard(item)
    },[])
    const { image, title, text_bg, price, description} = card

    const handleDonate =(cardId)=>{
       const savedItems = getSavedItem()
        const exist = savedItems.find(item => item === cardId);

        if(!exist){
            swal("Good Job!", "You Helped us!", "success");
            saveItemInLs(cardId)
        }else{
            swal("Opps!", "Already Donated!", "error");
        }

        
    }

  return (
    <div className="mt-28 max-w-7xl mx-auto lg:px-8 px-4">
        <div className="h-[55vh] relative">
            <img className="h-full w-full object-cover" src={image} alt="" />
            <div className="absolute bg-black opacity-60 bottom-0 h-[100px] right-0 left-0">
            </div>
                <button
                onClick={()=>handleDonate(card.id)}
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