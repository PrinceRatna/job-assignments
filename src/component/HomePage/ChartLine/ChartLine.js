import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';



const data = [
  {
    name: '01 jan,2020',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '02 jan,2020',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '03 jan,2020',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '04 jan,2020',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '05 jan,2020',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '06 jan,2020',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '07 jan,2020',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '08 jan,2020',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '09 jan,2020',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '10 jan,2020',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '11 jan,2020',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '12 jan,2020',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '13 jan,2020',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '14 jan,2020',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '15 jan,2020',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '16 jan,2020',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '17 jan,2020',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '18 jan,2020',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '19 jan,2020',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '20 jan,2020',
    uv: 2390,
    pv: 4990,
    amt: 2500,
  },
  

];

const ChartLine = () => {

   
    return (
      <ResponsiveContainer width="100%" aspect='5'>
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    );
};

export default ChartLine;