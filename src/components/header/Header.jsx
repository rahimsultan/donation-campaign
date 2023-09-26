import { Searchbar } from "../searchbar/Searchbar"


const Header = ({datas}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto lg:px-8 px-4 z-10" >
        <h1 className="text-3xl font-bold text-center">I Grow By Helping People In Need</h1>
        <div className="flex justify-center items-center w-full my-5">
            <Searchbar datas={datas}/>
        </div>
    </div>
  )
}

export default Header