import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { StockPoint } from '../types';

const data: StockPoint[] = [
  { name: 'Jan', value: 4000, benchmark: 2400 },
  { name: 'Feb', value: 3000, benchmark: 1398 },
  { name: 'Mar', value: 5000, benchmark: 3800 },
  { name: 'Apr', value: 4780, benchmark: 3908 },
  { name: 'May', value: 5890, benchmark: 4800 },
  { name: 'Jun', value: 6390, benchmark: 5800 },
  { name: 'Jul', value: 6490, benchmark: 6300 },
];

export const MarketChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            cursor={{ stroke: '#94a3b8', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#0ea5e9"
            strokeWidth={3}
            fill="url(#colorValue)"
          />
          <Area
            type="monotone"
            dataKey="benchmark"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};