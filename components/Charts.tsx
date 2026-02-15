import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ChartData } from '../types';

interface MarketChartProps {
  data: ChartData[];
}

const COLORS = ['#00897B', '#2dd4bf', '#5eead4', '#99f6e4'];

export const MarketChart: React.FC<MarketChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={90}
          fill="#00897B"
          paddingAngle={5}
          dataKey="value"
          label={({ name, value }) => `${name}: ${value.toLocaleString()}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          itemStyle={{ color: '#fff' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const AskChart: React.FC<{data: ChartData[]}> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={90} tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 11}} />
        <Tooltip
          cursor={{fill: 'rgba(255,255,255,0.03)'}}
          contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
        />
        <Bar dataKey="value" fill="#00897B" radius={[0, 6, 6, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
