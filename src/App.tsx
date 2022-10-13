import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

export default function App() {
  const studentData = [
    {
      name: "Stephen",
      submissions: {
        beavers: 3,
        stars: 2,
      },
    },
    {
      name: "Eduardo",
      submissions: {
        beavers: 7,
        stars: 1,
      },
    },
    {
      name: "Pepe",
      submissions: {
        beavers: 6,
        stars: 9,
      },
    },
    {
      name: "Gigachad",
      submissions: {
        beavers: 0,
        stars: 10,
      },
    },
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={studentData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis
        dataKey={"name"}
        type="number"
        domain={[0, 12]}
        padding={{ top: -10, bottom: 20 }}
      />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="4 3" />
      <Bar dataKey="Beavers" fill="#da9249" background={{ fill: "#da9249" }} />
      <Bar dataKey="Stars" fill="#ffd700" background={{ fill: "#ffd700" }} />
    </BarChart>
  );
}
