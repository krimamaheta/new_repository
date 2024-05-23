"use client"
import React from "react";
import About from "../component/About";
import NavBar from "../navigation";
import Footer from "./../component/footer"
const AboutPage=()=>{
  return(
    <div>
      <NavBar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default AboutPage;