

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
"use client"
import React, { useEffect, useState } from "react";
//import { Searching } from "./SideBar";
import SideBar from "./SideBar";
import style from "./../admin/style.module.css"
import { Grid, Box } from '@mui/material';

// components
import ProductPerformance from '@/app/component/dashboard/ProductPerformance';
import BlogCard from '@/app/component/dashboard/Blog';
import Sidebar from "./SideBar";


//USER PAGE
const DashBoard: React.FC = () => {
  return (
    <>
      
  <div>
    <div className={style.main_container}>
      <Box mt={3}>
        <Grid container spacing={2} >
          <Grid item xs={10} lg={12}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={12}>
          </Grid>
        </Grid>
      </Box>
    </div>
  </div>

    </>
  )


}
export default DashBoard;

