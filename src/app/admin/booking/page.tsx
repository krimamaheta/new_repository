"use client"
import React from "react"
import AdminPanel from "../page";
import Booking from "../../component/Booking";
import Sidebar from "@/app/component/SideBar";

const BookingPage=()=>{
    return(
        <div>
            <AdminPanel>
            {/* <Sidebar isMobileSidebarOpen={false} onSidebarClose={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                throw new Error("Function not implemented.");
            } } isSidebarOpen={false}> */}
                <Booking/>
                {/* </Sidebar> */}
            </AdminPanel>
        </div>
    )
}
export default BookingPage;