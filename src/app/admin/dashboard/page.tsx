"use client"
import React from "react";
import Dashboard from "./../../component/Dashboard"
import AdminPanel from "../page";
//import SideBar, { Searching } from "@/app/component/SideBar";
 const DashboardPage=()=>{
    return(
        <div>
            <AdminPanel>
            <Dashboard/>
            </AdminPanel>
            
        </div>
    )
}
export default DashboardPage