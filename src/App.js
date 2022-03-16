
import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './component/HomePage/HomePage';
import Navbar from './component/HomePage/Navbar';
import ChartLine from './component/HomePage/ChartLine/ChartLine';
import Progress from './component/HomePage/Progress/Progress';
import Bar1Chart from './component/HomePage/BarChart/BarChart';
import LineAreaChart from './component/HomePage/LineAreaChart/LineAreaChart';

import Dahboard from './component/HomePage/Dashboard/Dahboard';
import DashChart from './component/HomePage/Dashboard/DashChart/DashChart';
// import Auto from './component/HomePage/Auto/Auto';
import UseAutocomplete from './component/HomePage/Auto/Auto';
import Auto from './component/HomePage/Auto/Auto';

function App() {
  return (
    <div>
    <Navbar/>
   {/* <Auto></Auto> */}
    <Dahboard></Dahboard>
    <Progress></Progress>
    <Bar1Chart></Bar1Chart>

   <LineAreaChart></LineAreaChart>
    {/* <ChartLine></ChartLine> */}
    <HomePage></HomePage>
    {/* <DashChart></DashChart> */}
  </div>
  );
}

export default App;
