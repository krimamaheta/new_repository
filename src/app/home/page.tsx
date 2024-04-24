"use client";
import React, { useEffect, useState } from "react";
import { Home } from "../component/home";
import Loader from "../Loader";
import NavBar from "../navigation";
//import NavBar from "../navigation";
import Footer from "../componets/footer";


const HomePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 5000)
    setLoading(false)
  }, [])
  return (
    <>
      {!loading ?
        <Loader />
        :
        <>
          <NavBar />
          <Home />
          <Footer />
        </>
      }


    </>
  )
}
export default HomePage;