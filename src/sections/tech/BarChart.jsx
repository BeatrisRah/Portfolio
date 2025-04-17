import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Front-End',
        'coding': 3500,
        'debugging': 2400,
    },
    {
        name: 'Back-End',
        'coding': 3000,
        'debugging': 3200,
    },
    {
        name: 'Learning',
        'coding': 4000,
        'debugging': 2000,
    },
];

export default function CustomBarChart() {
   return (
    <div className="p-2 rounded-xl w-full h-90">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
        <XAxis dataKey="name" stroke="#999" />
        <YAxis stroke="#999" />
        <Tooltip />
        <Legend />
        <Bar dataKey="coding" fill="#7a6ff0" radius={[4, 4, 0, 0]} barSize={40} />
        <Bar dataKey="debugging" fill="#ffc43d" radius={[4, 4, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </div>
   );
}