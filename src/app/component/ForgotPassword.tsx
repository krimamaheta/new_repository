"use client"
import React, { useState } from "react";
import styles from "./../changepassword/style.module.css"
//import route from "next/navigation"
import { useRouter } from "next/navigation";
const Forgotpassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const route=useRouter();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setEmail((e.target as HTMLButtonElement).value);
    route.push("/changepassword")
  };

  return (
    <div className={styles["forgot-password-container"]}>
      <div className={styles["input-container"]}>
        <h2>Send Email</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button className={styles.button} onClick={onClick}>
        Change Password
      </button>
    </div>
  );
};

export default Forgotpassword;