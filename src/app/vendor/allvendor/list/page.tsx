
"use client"
import React, { useEffect, useState } from "react";

import styles from "./../../../vendor/allvendor/list/style.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation";
import axios from "axios";
import style from "./../list/style.module.css"



const DecoratonImageList = () => {

  const [vendorEventData, setVendorEventData] = useState([
    {
      images:"",
      websiteUrl:"",
      firmName: "",
      eventName: "",
      price: ""
    }

  ]);
  useEffect(() => {

    const FetchData = async () => {
      try {
        const res = await axios.get("https://localhost:44340/api/VendorEvent/list");
        console.log("=======123",res);
        setVendorEventData(res.data);
       // return res.data

      }
      catch (error) {
        console.log("error...");
        alert("fail to upload card")
      }
    }
    FetchData();
  }, [])
  return (
    <div className={style.vendorEventCardContainer}>
      {vendorEventData.map((vendorEvent, index) => (
        <div key={index} className={style.vendorEventCard}>
          {/* Assuming vendorEvent.images is the URL of the image */}
          <img src={vendorEvent.images} alt="Uploaded Image" />
          <div className={style.vendorDetails}>
          <label>{vendorEvent.websiteUrl}</label>
          <label>{vendorEvent.firmName}</label>
          <label>{vendorEvent.eventName}</label>
          <label>{vendorEvent.price}</label>
           
          </div>
        </div>
      ))}
    </div>
  )
}

export default DecoratonImageList;