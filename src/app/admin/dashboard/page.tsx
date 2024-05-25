"use client"
import React from "react";
import Dashboard from "./../../component/Dashboard"
import AdminPanel from "../page";
import Sidebar from "@/app/component/SideBar";
//import SideBar, { Searching } from "@/app/component/SideBar";
 const DashboardPage=()=>{
    return(
        <div>
            <AdminPanel>
           {/* <Sidebar isMobileSidebarOpen={true} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                throw new Error("Function not implemented.");
            } } isSidebarOpen={true}> */}
            <Dashboard/>
            {/* </Sidebar> */}
            </AdminPanel>
            
        </div>
    )
}
export default DashboardPage