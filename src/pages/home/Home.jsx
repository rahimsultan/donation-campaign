import Cards from "../../components/Cards/Cards"
import Header from "../../components/header/Header"


const Home = () => {
  return (
    <>
    <div className="home bg-img bg-no-repeat bg-cover bg-center relative bg-green-100 h-[65vh] flex justify-center items-center">
        <div className="absolute inset-0 opacity-75 bg-white z-0 "></div>
        <Header/>
    </div>
    <div className="max-w-7xl mx-auto lg:px-8">
            <Cards/>
    </div>
    </>
  )
}

export default Home