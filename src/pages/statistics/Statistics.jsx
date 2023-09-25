import { useLoaderData } from "react-router-dom"
import Chart from "../../components/chart/Chart"


const Statistics = () => {
  const datas = useLoaderData()
  
  return (
    <div className="max-w-7xl mx-auto lg:px-8 mt-28 flex justify-center h-[60vh] items-center flex-col gap-20">
      <div>
      <Chart datas={datas}/>
      </div>
    </div>
  )
}

export default Statistics