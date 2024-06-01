
"use client"
import { GetAllVendor } from "@/app/component/VendorForm";
import DecoratorHome from "@/app/component/dashboard/DecoratorHome";
import Footer from "@/app/component/footer";
import NavBar from "@/app/navigation";
import React from "react";
const AllVendorPage=()=>{
    return(
        <div>
            <NavBar/>
            <DecoratorHome/>
            <GetAllVendor/>
            <Footer/>
        </div>
    )
}
export default AllVendorPage;