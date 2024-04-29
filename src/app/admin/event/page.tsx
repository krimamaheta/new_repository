
"use client"
import React from "react";
import AdminPanel from "../page";
import {Event} from  "@/app/component/Event"

const EventPage=()=>{
    return(
        <div>
                <AdminPanel>
                    <Event/>
                </AdminPanel>
        </div>
    )
}

export default EventPage;