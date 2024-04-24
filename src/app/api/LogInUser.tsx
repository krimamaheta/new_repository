
import React, { useState } from "react";
import { json } from "stream/consumers";

const LogInUserPage:React.FC=async(value)=>{
    
    // const [registerError,setRegisterError]=useState("");
    try{
        const url="https://localhost:44340/Api/Auth/login"
        console.log(value)
        const res=await fetch(url,{
            method:"POST",
            headers:{
                "content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify(value)
     });
     if(res.ok){
        const data=await res.json();
        console.log(data);
        alert("Login SuccessFully");
        
     }else{
        const errorMessage = await res.text();
            
        if (res.status === 409) { // Assuming 409 is the status code for user already exists
            console.log("User already exists. Please choose a different username or email.");
        } else {
            console.log(`An error occurred: ${errorMessage}`);
        }
     }

    }
    catch(error)
    {
        console.error("sdf", error);
        console.log("An error occurred during login.");
    
    }

    return( 
        <div>
                <h2>login complete</h2>
        </div>
    )
};
export default LogInUserPage;

