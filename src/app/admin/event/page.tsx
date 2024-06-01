
"use client"
import React from "react";
import AdminPanel from "../page";
import { Event } from "@/app/component/Event"
import Sidebar from "@/app/component/SideBar";

const EventPage = () => {
    return (
        <div>
            <AdminPanel>
                <Event />
            </AdminPanel>
        </div>
    )
}

export default EventPage;