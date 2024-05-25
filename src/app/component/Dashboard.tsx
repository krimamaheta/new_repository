

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
import React from "react";
//import { Searching } from "./SideBar";
import SideBar from "./SideBar";
import style from "./../admin/style.module.css"
import { Grid, Box } from '@mui/material';

// components
import SalesOverview from '@/app/component/dashboard/SalesOverview';
import DailyActivity from '@/app/component/dashboard/DailyActivity';
import ProductPerformance from '@/app/component/dashboard/ProductPerformance';
import BlogCard from '@/app/component/dashboard/Blog';
import MonthlyEarnings from "./dashboard/MonthlyEarnings";
import Sidebar from "./SideBar";
import PageContainer from "./container/PageContainer";
import PiChart from "./dashboard/PiChart"
import BarsDataset from "./dashboard/BarsDataset"
//USER PAGE
const DashBoard:React.FC=()=>(
  <div>
    {/* <SideBar isMobileSidebarOpen={false} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } isSidebarOpen={false}>
      <div>
    <BlogCard/>
    <DailyActivity/>
    <MonthlyEarnings/>

      </div>
    </SideBar> */}
    
     {/* <PageContainer title="Dashboard" description="this is Dashboard">
     <SalesOverview />

     </PageContainer> */}
     <div className={style.main_container}>

     
     <Box mt={3}>
     <Grid container spacing={2} >
        <Grid item xs={10} lg={12}>
            {/* <PiChart/> */}
            {/* <div className="container  px-5 py-24 mx-auto">
        <div className="text-center mb-20">
         
          
          <div className="flex mt-0 justify-center">

           
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-300 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">EventMaker</h2>
              <p className="leading-relaxed text-base">Event planning, design  within time limits. Working with clients to identify their needs
                and ensure customer satisfaction,Organizing facilities and details such as decorations, catering,
                location,  special guests etc.</p>
            </div>

          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>


              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Decorentals</h2>
              <p className="leading-relaxed text-base">
                Our team specializes in crafting mesmerizing lighting and flower arrangements that illuminate your venue with warmth and sophistication
                our skilled decorators also excel in creating breathtaking floral arrangements.</p>
            </div>


          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Catering</h2>
              <p className="leading-relaxed text-base"> Our catering team offers professional service and seamless coordination to ensure that every aspect of your dining experience is flawless,
                From menu planning , allowing you to relax and enjoy your event while we take care of the rest.</p>
            </div>

          </div>
        </div> */}
       
            {/* </div> */}
            <BlogCard />
          {/* <SalesOverview /> */}
        </Grid>
       
        
        <Grid item xs={12} lg={12}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={12}>
          {/* <BlogCard /> */}
        </Grid>
      </Grid>
    </Box>
    </div>
  
  
  

  
    
  
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

