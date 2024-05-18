import React from "react";
import AdminPanel from "../page";
import Vendor from "@/app/component/Vendor";

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