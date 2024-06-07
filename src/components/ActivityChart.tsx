// // src/components/ActivityChart.tsx
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// interface ActivityChartProps {
//     data: any;
// }

// const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
//     return (
//         <ResponsiveContainer width="100%" height={400}>
//             <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="commit" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="pull_request_opened" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="merge" stroke="#ffc658" />
//                 <Line type="monotone" dataKey="meeting" stroke="#ff7300" />
//                 <Line type="monotone" dataKey="documentation" stroke="#387908" />
//             </LineChart>
//         </ResponsiveContainer>
//     );
// };

// export default ActivityChart;


// src/components/ActivityChart.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
    data: any;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
    console.log('Chart Data:', data); // Log data to check
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="commit" stroke="#8884d8" />
                <Line type="monotone" dataKey="pull_request_opened" stroke="#82ca9d" />
                <Line type="monotone" dataKey="merge" stroke="#ffc658" />
                <Line type="monotone" dataKey="meeting" stroke="#ff7300" />
                <Line type="monotone" dataKey="documentation" stroke="#387908" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;
