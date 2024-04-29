import React from "react";
import AdminPanel from "../page";
import Vendor from "@/app/component/Vendor";

const DecoratorPage=()=>{
    return(
        <div>
            <h2>welcome decorator page</h2>
            <AdminPanel>
            <Vendor/>
            </AdminPanel>
           
        </div>
    )
}

export default DecoratorPage;