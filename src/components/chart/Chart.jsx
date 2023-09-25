import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { getSavedItem } from '../../utility/localstorage';

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };



const Chart = ({datas}) => {

    const [items, setItems] =useState([])

    useEffect(()=>{
        const saved = getSavedItem();
        const filteredData = datas.filter(data => saved.includes(data.id))
        setItems(filteredData)
      },[])

      const funChart =()=>{
        const donation = datas.length;
        const donated = items.length

        const donatedPercentage = donated / donation * 100;
        const duePercentage = 100 - donatedPercentage; 

        return [
            {name : 'Total Donation', value: duePercentage},
            { name: 'Your Donation', value: donatedPercentage}
        ]

      }
     const percentage =  funChart()

    //  console.log(percentage);



     const COLORS = ['#FF444A', '#00C49F'];

  return (

    <PieChart width={400} height={400}>
      <Pie
        data={percentage}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={110}
        fill="#8884d8"
        dataKey="value"
        label={renderCustomizedLabel}
      >
        {percentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
      </Pie>
      <Legend />
    </PieChart>

  )
}

export default Chart