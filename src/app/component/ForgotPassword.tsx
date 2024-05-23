"use client"
import React, { useEffect, useState } from "react";
import styles from "./../changepassword/style.module.css"
//import route from "next/navigation"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
const Forgotpassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const route=useRouter();


  const HandleResetPass = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    //setEmail((e.target as HTMLButtonElement).value);
    try{
      var res=await axios.post(`https://localhost:44340/Api/Auth/forgot-password?email=${email}`);
 
      console.log('---------------------------',res);
      console.log(res.data.message)
      if(res.status===200){
       // const{email,token}=res.data;  
        alert(res.data.message)
        //email("");
        window.location.href="https://ethereal.email/messages";
        //alert("open your mailbox")
       // route.push("/changepassword")
      }else{
        //500 error
        alert(res.data.message)
        console.error("password reset request fail")
      }
      
     
    }
    catch(error){
      console.error("An Error occure",error)
    }
    
    
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const Cancel=()=>{
    route.push("/login")
  }

const User=useSelector((state)=>state.auth.user);
console.log(User);

const Email=User?.user?.email;
console.log(Email);

// useEffect(()=>{

//   if(User && User.user && User.user.email){
//     setEmail(User.user.email);
//   }
// },[User])


  return (
    <div className={styles["change-password-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["input-container"]}>
          <h2 className={styles.head}>Send Email</h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

      
          <button className={styles.b1} onClick={Cancel}>cancel</button>
          <button className={styles.b1} onClick={HandleResetPass}>Send</button>
        </div>
      </div>
  
  );
};

export default Forgotpassword;