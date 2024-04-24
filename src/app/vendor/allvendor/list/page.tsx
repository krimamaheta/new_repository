
"use client";
import React, { useState } from "react";
import styles from "./../../../changepassword/style.module.css";
const ListPage=()=>{
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
  
    return(
        <div>
                <div className={styles["change-password-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["input-container"]}>

          <h2 className={styles.head}>EventList</h2>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="EventName"
          /> 
          </div>
          <div className={styles["input-container"]}>

          <input
            type="text"
            name="confirmpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Add Image"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Location"
          />
        </div>
        {/* <div className={styles["input-container"]}>
          <input
            type="text"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="OTP"
          /> */}
          <button className={styles.b1}>Edit</button>
          <button className={styles.b1}>Cancel</button>
        </div>
      </div>
        </div>
    )
}

export default ListPage;