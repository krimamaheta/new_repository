"use client"
import React, { Children } from "react";
import SideBar, { Searching } from "./../component/SideBar"


const AdminPanel=({children}:any)=>{
    return(
        <div className="flex flex-col">
            <Searching/>
            <div className="flex flex-row gap-2">
                <SideBar/>
                {children}
            </div>
        </div>
    )
}
export default AdminPanel;