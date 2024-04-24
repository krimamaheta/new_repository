"use client"
import React, { useState } from "react";
import styles from "./../changepassword/style.module.css"; // Import your CSS file

const ChangePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className={styles["change-password-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["input-container"]}>
          <h2 className={styles.head}>Reset Password</h2>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="text"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="OTP"
          />
          <button className={styles.b1}>cancel</button>
          <button className={styles.b1}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;