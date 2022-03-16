import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '',
    // uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '',
    // uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '',
    // uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '',
    // uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '',
    // uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '',
    // uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '',
    // uv:6000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '',
    uv:6000,
    // pv: 4300,
    amt: 2100,
  },
];
const DashChart = () => {
    return (
        <div>
             <ResponsiveContainer width="100%" aspect={4}>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis hide='true' />
          <YAxis hide='true'  />
          <Tooltip />
          {/* <Legend /> */}
          <Bar  dataKey="pv" fill="#e5e9f2" />
          <Bar dataKey="uv" fill="#6576ff" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default DashChart;