import React from 'react';
import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, Legend, Line, Pie, PieChart, Tooltip } from 'recharts';
import { LineChart, XAxis, YAxis } from 'recharts';
import './DashBoard.css'
const DashBoard = () => {
    const [charts,setCharts]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCharts(data))
    },[])
    return (
      <div className="chart-container">
        <div>
          <h1 className="head1">Sells Increased With Months</h1>
          <LineChart
            width={730}
            height={250}
            data={charts}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line type="monotone" dataKey={"sell"}></Line>
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div>
          <h1 className="head1">
            Sells Increased With Months{" "}
            <span className="span">(ELABORATELY)</span>
          </h1>
          <AreaChart
            width={730}
            height={250}
            data={charts}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={"sell"} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6495ED" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6495ED" stopOpacity={0} />
              </linearGradient>
              <linearGradient id={"month"} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06BA9F" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey={"month"} />
            <YAxis />
            <Area
              type="monotone"
              dataKey={"sell"}
              stroke="#FFFFFF"
              fillOpacity={1}
              fill="url(#sell)"
            />
          </AreaChart>
        </div>
        <div>
          <h1 className="head1">Investment Vs Revenue</h1>
          <BarChart width={730} height={250} data={charts}>
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"investment"} fill="#8884d8" />
            <Bar dataKey={"revenue"} fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <h1 className="head1">Investment Vs Revenue</h1>
          <PieChart width={730} height={250}>
            <Pie
              data={charts}
              dataKey={"investment"}
              nameKey={"revenue"}
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={charts}
              dataKey={"investment"}
              nameKey={"revenue"}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      </div>
    );
};

export default DashBoard;