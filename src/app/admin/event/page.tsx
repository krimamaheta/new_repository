
"use client"
import React from "react";
import AdminPanel from "../page";
import {Event} from  "@/app/component/Event"
import Sidebar from "@/app/component/SideBar";

const EventPage=()=>{
    return(
        <div>
                <AdminPanel>
                {/* <Sidebar isMobileSidebarOpen={false} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                throw new Error("Function not implemented.");
            } } isSidebarOpen={false}> */}
                   <Event/>
                {/* </Sidebar> */}
                   
                </AdminPanel>
        </div>
    )
}

export default EventPage;