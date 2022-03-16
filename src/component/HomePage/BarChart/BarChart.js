import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
// import { PieChart, Pie,Cell, ResponsiveContainer } from 'recharts';

const Bar1Chart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


const hlw = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div style={{padding:'5px', marginTop:'20px'}}>
           <Grid container  justifyContent="center"
  alignItems="center"  spacing={3}>
                  <Grid item xs={12} sm={6}>
          <Box>
            <Container>
            <Box boxShadow={3} padding={2}>
            <Typography>Sales Revenue</Typography>
              <Typography>In last 30 days revenue from rent.</Typography>
       
            <Grid container spacing={3}>
        <Grid  item xs={4}>
          <Box>
            Monthly <br/>
            9.28k <br/>
            4.63%
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box >
            Weekly<br/>
            2.69k<br/>
            1.92%
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box> 
            Daily(Avg)<br/>
            0.96k <br/>
            3.45%
          </Box>
        </Grid>
        </Grid>
              
         <ResponsiveContainer width="100%" aspect={
        1.90}>
        <BarChart width={20} height={20} data={data}>
         <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </Box>
      </Container>

      </Box>
      </Grid>
      <Grid item xs={12} sm={6}>

      <div>
      <Container>
            <Box boxShadow={3} padding={2}>
              <Typography>Room Booking Chart</Typography>
      <PieChart width={200}  height={200}  style={{margin:'auto'}}>
        <Pie
          data={hlw}
          // cx={120}
          // cy={200}
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
          // cx={420}
          // cy={200}
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
           
      <Grid container justifyContent="center"
  alignItems="center" spacing={3}>
        <Grid  item xs={6}>
          <Box>
            Single <br/>
            1913 58.63%
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box >
            Double<br/>
            459 23.94%
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box> 
            Delux <br/>
            482  12.94%
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box> 
            Suit<br/>
            138  4.49%
          </Box>
        </Grid>
        </Grid>


      </Box>
      </Container>
      </div>
      </Grid>
      </Grid>
        </div>
    );
};

export default Bar1Chart;














