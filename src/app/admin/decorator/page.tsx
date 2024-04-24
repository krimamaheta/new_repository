import React from "react";
import AdminPanel from "../page";
import Decorator from "@/app/component/Decorator";

const DecoratorPage=()=>{
    return(
        <div>
            <h2>welcome decorator page</h2>
            <AdminPanel>
            <Decorator/>
            </AdminPanel>
           
        </div>
    )
}

export default DecoratorPage;