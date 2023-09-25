import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonatonCard from "../../components/donationcard/DonatonCard";
import NoData from "../../components/nodatafound/NoData";
import { getSavedItem } from "../../utility/localstorage";


const Donation = () => {
  const datas = useLoaderData();
  const [items, setItems] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [num, setNum] = useState(4)

  // console.log(isShow);
  useEffect(()=>{
    const savedItem = getSavedItem();

    const filteredData = [];
    for (const id of savedItem) {
      const matchingItems = datas.filter(data => data.id === id);
      filteredData.push(...matchingItems);
    }
    
      setItems(filteredData)
    
  },[datas])

  
  return (
    items.length > 0 ? 
    <div className="max-w-7xl mx-auto lg:px-8 mt-28 px-4">
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5">
      {
         items.slice(0,num).map((item, idx) => <DonatonCard key={idx} item={item}/>)
      }
    </div>
    {
      items.length > 4 && <div className={isShow ? 'hidden' : 'text-center mt-10'}>
      <button
      onClick={()=> {
        setNum(items.length) 
        setIsShow(!isShow)
      }}
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        See All
      </button>
    </div>
    }
    </div> : <NoData/>
  )
}

export default Donation