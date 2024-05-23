

// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';

// const Dashboard: React.FC = () => {
//   const [chart, setChart] = useState<any>(null); // State to store chart instance

//   const data = {
//     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
//     datasets: [
//       {
//         label: 'Dataset',
//         data: [-50, -20, 10, 30, 50, 80], // Sample data, you can replace it with your own
//         borderColor: 'red',
//         backgroundColor: 'rgba(255, 0, 0, 0.5)',
//         pointStyle: 'circle',
//         pointRadius: 10,
//         pointHoverRadius: 15
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         type: 'category'
//       },
//       y: {
//         beginAtZero: true
//       }
//     },
//     plugins: {
//       title: {
//         display: true,
//         text: (ctx: { chart: { data: { datasets: { pointStyle: string; }[]; }; }; }) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
//       }
//     }
//   };

//   const actions = [
//     {
//       name: 'pointStyle: circle (default)',
//       handler: () => {
//         if (chart) {
//           chart.data.datasets.forEach((dataset: { pointStyle: string; }) => {
//             dataset.pointStyle = 'circle';
//           });
//           chart.update();
//         }
//       }
//     },
//     // Add other actions similarly
//   ];

//   return (
//     <div>
//       <Line data={data} options={options} ref={(ref) => setChart(ref?.chartInstance)} />
//       {/* Render buttons for actions */}
//       <div>
//         {actions.map((action, index) => (
//           <button key={index} onClick={action.handler}>
//             {action.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Searching } from "./SideBar";
import SideBar from "./SideBar";
import style from "./../admin/style.module.css"
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/component/dashboard/YearlyBreakup';
// components
import SalesOverview from '@/app/component/dashboard/SalesOverview';
import DailyActivity from '@/app/component/dashboard/DailyActivity';
import ProductPerformance from '@/app/component/dashboard/ProductPerformance';
import BlogCard from '@/app/component/dashboard/Blog';
//USER PAGE
const DashBoard:React.FC=()=>(
  <div>

    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
    {/* <div >
        <h2>Welcome dashboard page</h2>
        <button className={style.b1}>+Add User</button>
        <button className={style.b1}>UserList</button>
        <div className={style.m2}>
<table>
<thead>
<tr>
<th className={style.th1}>Name</th>
<th className={style.th1}>Email</th>
<th className={style.th1}>SelectedEvent</th>
<th className={style.th1}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>krishna</td>
<td>krishna@gmail.com</td>
<td>WeddingCeremony</td>
<td>
  <button className={style.b3}>Edit</button>
  <button className={style.b3}>View</button>
  <button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Radhika</td>
<td>Radhika@gmail.com</td>
<td>BirthdayCelebration</td>
<td>
  <button className={style.b3}>Edit</button>
  <button className={style.b3}>View</button>
  <button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Anjani</td>
<td>Anjani@gmail.com</td>
<td>BirthdayCelebration</td>
<td>
  <button className={style.b3}>Edit</button>
  <button className={style.b3}>View</button>
  <button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Govinad</td>
<td>Govinad@gmail.com</td>
<td>MarrigeAnnyversary</td>
<td>
  <button className={style.b3}>Edit</button>
  <button className={style.b3}>View</button>
  <button className={style.b3}>Delete</button>
</td>
</tr>
</tbody>
</table>

        </div>
        </div>
   
       */}
  </div>
)
export default DashBoard;

