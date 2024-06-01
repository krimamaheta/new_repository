"use client"
import React from "react"
import AdminPanel from "../page";
import User from "@/app/component/User";
import Sidebar from "@/app/component/SideBar";

const UserPage=()=>{
    return(
        <div>
              <AdminPanel>
              <User/>
              </AdminPanel>
        </div>
    )
}

export default UserPage;

