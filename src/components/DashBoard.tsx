// // src/components/Dashboard.tsx
// import React, { useEffect, useState } from 'react';
// import { fetchActivityData } from '../services/api';
// import ActivityChart from './ActivityChart';
// import styled from 'styled-components';

// const DashboardContainer = styled.div`
//     padding: 20px;
//     background-color: #f5f5f5;
//     min-height: 100vh;
// `;

// const Dashboard: React.FC = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const activityData = await fetchActivityData();
//             setData(activityData);
//         };
//         getData();
//     }, []);

//     return (
//         <DashboardContainer>
//             <h1>Developer Activity Dashboard</h1>
//             <ActivityChart data={data} />
//         </DashboardContainer>
//     );
// };

// export default Dashboard;

// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { fetchActivityData } from '../services/api';
import ActivityChart from './ActivityChart';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
    min-height: 100vh;
`;

const Dashboard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const activityData = await fetchActivityData();
                console.log(activityData); // Log data to check
                setData(activityData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <DashboardContainer>
            <h1>Developer Activity Dashboard</h1>
            <ActivityChart data={data} />
        </DashboardContainer>
    );
};

export default Dashboard;
