import React from "react";
import AdminPanel from "../page";
import Vendor from "@/app/component/Vendor";
import Sidebar from "@/app/component/SideBar";

const DecoratorPage=()=>{
    return(
        <div>
         
            <AdminPanel>
            {/* <Sidebar isMobileSidebarOpen={true} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                throw new Error("Function not implemented.");
            } } isSidebarOpen={true}> */}
            <Vendor/>
            {/* </Sidebar> */}
           
            </AdminPanel> 
           
        </div>
    )
}

export default DecoratorPage;