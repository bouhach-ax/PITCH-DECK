import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ChartData } from '../types';

const COLORS = ['#00897B', '#38c8b8', '#6edecf', '#a7ede1'];

export const MarketChart: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={280}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
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
        contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '12px', fontSize: '13px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
        itemStyle={{ color: '#1e293b' }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export const AskChart: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={data} layout="vertical" barCategoryGap="25%">
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" horizontal={false} />
      <XAxis type="number" hide domain={[0, 50]} />
      <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} />
      <Tooltip
        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        contentStyle={{ backgroundColor: '#0e5952', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '12px', fontSize: '13px' }}
        formatter={(value: number) => [`${value}%`, 'Allocation']}
      />
      <Bar dataKey="value" radius={[0, 8, 8, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
