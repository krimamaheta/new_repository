import React from "react";
import AdminPanel from "../page";
import Vendor from "@/app/component/Vendor";
import Sidebar from "@/app/component/SideBar";

const DecoratorPage=()=>{
    return(
        <div>
         
            <AdminPanel>
            <Vendor/>
            </AdminPanel> 
           
        </div>
    )
}

export default DecoratorPage;