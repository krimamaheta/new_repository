"use client"
import React from "react";
import styles from "./../../../changepassword/style.module.css"
//import styles from "./../changepassword/style.module.css";
import { useState } from "react";
import Link from "next/link";
const EventForm=()=>{
    const[value,setValue]=useState({
        EventName:"",
        Description:"",
        ImageUrl:"",
        Prices:""
    });
const selectchange=(e)=>{
    setValue(e.target.value);
}
  
    return (
        <div>
           <div className={styles["change-password-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["input-container"]}>
          <h2 className={styles.head}>Add Event</h2>
            <label htmlFor="EventName">SelectEvent:</label>
            <select name="EventName" id="EventName" value={value.EventName} onChange={selectchange}>
                <option value="WeddingCeremony"> WeddingCeremony</option>
                <option value="Haldi">Haldi</option>
                <option value="Sangit">Sangit</option>
                <option value="RingCeremony">RingCeremony</option>
                <option value="BabyShower">BabyShower</option>
                <option value="AnnyversaryCeremony">AnnyversaryCeremony</option>
                <option value="BirthdayCelebration">BirthdayCelebration</option>
                <option value="ThreadCeremony">ThreadCeremony</option>


            </select>
        </div>
        <div className={styles["input-container"]}>
            <label htmlFor="Description">Description:</label>
          <input
            type="text"
            name="Description"
            value={value.Description}
            onChange={selectchange}
            placeholder="Description"
          />
        </div>
        <div className={styles["input-container"]}>
        <label htmlFor="ImageUrl">UploadImage:</label>
          <input
            type="file"
            name="ImageUrl"
            value={value.ImageUrl}
            onChange={selectchange}
            placeholder="ImageUpload"
          />
        </div>
        <div className={styles["input-container"]}>
        <label htmlFor="Prices">DishName:</label>
          <input
            type="text"
            name="Prices"
            value={value.Prices}
            onChange={selectchange}
            placeholder="DishName"
          />
        </div>
        <div className={styles["input-container"]}>
        <label htmlFor="Prices">DishPrice:</label>
          <input
            type="text"
            name="Prices"
            value={value.Prices}
            onChange={selectchange}
            placeholder="Prices"
          />
        </div>
     
          <button className={styles.b1}>Edit</button>
          <button className={styles.b1}>Add</button>
          <Link href="/vendor/allvendor">Go to VendorPage</Link>
        </div>
       
      </div>
    </div>
    
    )
}
export default EventForm;