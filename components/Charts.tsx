import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ChartData } from '../types';

interface MarketChartProps {
  data: ChartData[];
}

const COLORS = ['#0d9488', '#2dd4bf', '#99f6e4', '#ccfbf1'];

export const MarketChart: React.FC<MarketChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const AskChart: React.FC<{data: ChartData[]}> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{fill: '#94a3b8'}} />
                <Tooltip 
                     cursor={{fill: '#1e293b'}}
                     contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                />
                <Bar dataKey="value" fill="#0d9488" radius={[0, 4, 4, 0]}>
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}