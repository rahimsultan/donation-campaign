import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import SearchContext from "../../components/Context/SearchContext";
import Header from "../../components/header/Header";


const Home = () => {
  const datas = useLoaderData();
  const [data, setData] = useState(datas)
  return (
    <SearchContext.Provider value={{data, setData}}>
    <div className="home bg-img bg-no-repeat bg-cover bg-center relative bg-green-100 h-[65vh] flex justify-center items-center">
        <div className="absolute inset-0 opacity-75 bg-white z-0 "></div>
        <Header datas={datas}/>
    </div>
    <div className="max-w-7xl mx-auto lg:px-8 px-4">
            <Cards/>
    </div>
    </SearchContext.Provider>
  )
}

export default Home