
"use client"
import React from "react";
import {LandingPage} from"../component/LandingPage"
import NavBar from "../navigation";
import Footer from "../componets/footer";
const LandingPage_main=()=>{
    return (
        <div>
            <NavBar/>
            <LandingPage/>
            <Footer/>
        </div>
    )
}
export default LandingPage_main;
