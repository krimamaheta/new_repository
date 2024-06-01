"use client"
import React, { Children } from "react";
import SideBar, { Searching } from "./../component/SideBar"
import NavBar from "../navigation";


const AdminPanel=({children}:any)=>{
    return(
        <div className="flex flex-col">
           
            <NavBar/>
            <div className="flex flex-row gap-2" >
                <div>
                <SideBar/>
                </div>
                {children}
            </div>
        </div>
    )
}
export default AdminPanel;