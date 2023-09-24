import { Searchbar } from "../searchbar/Searchbar"


const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto lg:px-8 z-20" >
        <h1 className="text-3xl font-bold text-center">I Grow By Helping People In Need</h1>
        <div className="flex justify-center items-center w-full my-5">
            <Searchbar/>
        </div>
    </div>
  )
}

export default Header