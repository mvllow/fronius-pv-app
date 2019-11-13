import React from 'react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'SnapINverter',
    'Initial Cost': 4000,
    'Lifetime Upkeep': 2400,
    amt: 2400,
  },
  {
    name: 'Micro-Inverter',
    'Initial Cost': 3000,
    'Lifetime Upkeep': 1398,
    amt: 2210,
  },
  {
    name: 'Typical String Inverter',
    'Initial Cost': 2000,
    'Lifetime Upkeep': 9800,
    amt: 2290,
  },
]

export default () => (
  <aside>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Initial Cost" stackId="a" fill="#5392B6" />
        <Bar dataKey="Lifetime Upkeep" stackId="a" fill="#403848" />
      </BarChart>
    </ResponsiveContainer>

    <style jsx>{`
      aside {
        margin: 0 1rem 1rem 0;
        width: 100%;
        max-width: 39.2%;
      }
    `}</style>
  </aside>
)
