import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Artistic', value: 400 },
  { name: 'Investigative', value: 300 },
  { name: 'Social', value: 300 },
  { name: 'Realistic', value: 200 },
  { name: 'Enterprising', value: 200 },
  { name: 'Conventional', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#03A9F4','#FF5722'];

const InventoryGraph = () => {
  return (
    <PieChart width={800} height={400}>
    <Pie
      data={data}
      cx={120}
      cy={200}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Pie
      data={data}
      cx={420}
      cy={200}
      startAngle={180}
      endAngle={0}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  )
}

export default InventoryGraph