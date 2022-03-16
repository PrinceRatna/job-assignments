import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  
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
const LineAreaChart = () => {
    return (
        <div style={{marginTop:'30px',marginBottom:'40px'}}>
           
             <Container>
             <Box boxShadow={3} padding={2}>
               <div style={{marginBottom:'25px'}}>
               <Typography>Income vs Expenses</Typography>
               <Typography>How was your income and Expenses this month.</Typography>
               </div>
           <Grid container   spacing={3}>
                  <Grid item xs={6}>
                  <Grid container  spacing={3} >
                  <Grid item xs={3}  >
                    Income <br/>
                    2.57K<br/>
                    12.37%
                  </Grid>
                  <Grid item xs={3} >
                    Expenses<br/>
                    3.5K<br/>
                    8.37%
                  </Grid>
                  </Grid>
                  </Grid>
            </Grid>        
            <ResponsiveContainer width="100%" aspect={2.5}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="pv" fill="#8884d8" stroke="#8884d8" />
          {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </Box>
      </Container>
      
        </div>
    );
};

export default LineAreaChart;