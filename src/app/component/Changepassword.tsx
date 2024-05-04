"use client"
import React, { useState } from "react";
import styles from "./../changepassword/style.module.css"; // Import your CSS file
import axios from "axios";
import { useRouter } from "next/navigation";
interface prop{
 params:{
  token:string
 } 
}
const ChangePassword:React.FC<prop>=({
  params,
}: {
  params: { token: string };
}) => {

  const route=useRouter();
  const ResetToken = Array.isArray(params.token) ? params.token[0] : params.token;
  console.log("---------123", params);
  const [value, setValue] = useState({
    email:"",
    password: "",
    confirmPassword: "",
    token: ResetToken,
  });


  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setValue((pre:any)=>({
      ...pre,
      [name]:value
    }))
  }


  const ResetPassword=async()=>{
    try{
      debugger
      const res=await axios.post("https://localhost:44340/Api/Auth/reset-password",{
        password:value.password,
        confirmPassword:value.confirmPassword,
        token:ResetToken,
        email:value.email,
      });
      console.log("----",res.data)
      if(res.status===200){
        alert(res.data.message);
        //reset 

        setValue({
          email:"",
          password:"",
          confirmPassword:"",
          token:ResetToken,
        })
        route.push("/login");
       // alert("password has beend changed.")
      }else{
        //500 error
        alert(res.data.message)

      }
    }catch(error){
      console.error("An error occure",error);
      alert("fail to reset password please try again letter.....!")
    }
  }
  //const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");
  //const [email, setEmail] = useState("");
  //const [token, setToken] = useState("");

  return (
    <div className={styles["change-password-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["input-container"]}>
          <h2 className={styles.head}>Reset Password</h2>
          <div className={styles["input-container"]}>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
            placeholder="New Password"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="confirmPassword"
            value={value.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        {/* <div className={styles["input-container"]}>
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
          /> */}
          <button className={styles.b1}>cancel</button>
          <button className={styles.b1} onClick={ResetPassword}>Reset</button>
        </div>
      </div>
    
  );
};

export default ChangePassword;