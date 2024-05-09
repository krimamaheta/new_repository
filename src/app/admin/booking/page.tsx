"use client"
import React from "react"
import AdminPanel from "../page";
import Booking from "../../component/Booking";

const BookingPage=()=>{
    return(
        <div>
            <AdminPanel>
                <Booking/>
            </AdminPanel>
        </div>
    )
}
export default BookingPage;