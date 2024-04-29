"use client"
import React, { useEffect } from "react";
import styles from "./../../../changepassword/style.module.css"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
const EventForm = () => {
  const [value, setValue] = useState({
    eventName: "",
    description: "",
    ImageUrl: null,
    Prices: ""
  });
  const [events, seteEvents] = useState([])
  const[loading,setLoading]=useState(false)


  const selectchange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    // setValue(prestate => ({
    //   ...prestate,
    //   [name]: value
    // }));
    setValue(value)
    
  }


  const onChangeFile = (e) => {
    // const file=e.target.files[0];
    setValue((prestate) => ({
      ...prestate,
      ImageUrl: e.target.files[0] // Store the first selected file
    }))

  }
  useEffect(() => {
    fetchEvent();
  }, [])
  const fetchEvent = async () => {
    
    try {
      const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
      seteEvents(response.data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  }
  const onClick = async () => {
    try {
  
      const formdata = new FormData();
      formdata.append("EventName", value.eventName)
      formdata.append("Prices:", value.Prices)
      formdata.append("ImageUrl:", value.ImageUrl)

      const response = await axios.post("https://localhost:44340/Api/VendorEvent/AddDetailstest", formdata, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log("Event Added Successfully...............", response.data);
      alert("Event Added Successfully...............");
      setValue({
        eventName: "",
        description: "",
        ImageUrl: null,
        Prices: ""
      })
    }
    catch (error) {
      console.error("Error while adding event:", error);
      alert("Add fail: ");
    }
  };

  return (
    <div>
      <div className={styles["change-password-container"]}>
        <div className={styles["card-container"]}>
          <div className={styles["input-container"]}>
            <h2 className={styles.head}>Add Decoration</h2>
            <label htmlFor="EventName">Event:</label>
            <select name="EventName" id="EventName" value={value.eventName} onChange={(e)=>{
              setValue(e.target.value)
            }}>
              <option value="">SelectEvent</option>
              {loading ? (<option disabled>Loading...</option>) : (
                  events.map((event)=>(
                    <option key={event.eventId} value={event.eventName}>{event.eventName}</option>
                  ))
            )}
            </select>
          </div>
          {/* <div className={styles["input-container"]}>
            <label htmlFor="Description">Description:</label>
            <input
              type="text"
              name="Description"
              value={value.description}
              onChange={selectchange}
              placeholder="Description"
            />
          </div> */}

          {/* <div className={styles["input-container"]}>
        <label htmlFor="Prices">DishName:</label>
          <input
            type="text"
            name="Prices"
            value={value.Prices}
            onChange={selectchange}
            placeholder="DishName"
          />
        </div> */}
          <div className={styles["input-container"]}>
            <label htmlFor="Prices">DecorationPrice:</label>
            <input
              type="text"
              name="Prices"
              value={value.Prices}
              onChange={selectchange}
              placeholder="Prices"
            />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="ImageUrl">UploadImage:</label>
            <input
              type="file"
              name="ImageUrl"
              multiple
              // value={value.ImageUrl}
              onChange={onChangeFile}
              placeholder="ImageUpload"
            />
          </div>

          <button className={styles.b1}>Edit</button>
          <button className={styles.b1} onClick={onClick}>Add</button>
          <Link href="/vendor/allvendor">Go to VendorPage</Link>
        </div>

      </div>
    </div>

  )
}
export default EventForm;