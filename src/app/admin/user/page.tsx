"use client"
import React from "react"
import AdminPanel from "../page";
import User from "@/app/component/User";
import Sidebar from "@/app/component/SideBar";

const UserPage=()=>{
    return(
        <div>
              <AdminPanel>
              {/* <Sidebar isMobileSidebarOpen={false} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
          throw new Error("Function not implemented.");
        } } isSidebarOpen={false}> */}
              <User/>
              {/* </Sidebar> */}
                
              </AdminPanel>
        </div>
    )
}

export default UserPage;

