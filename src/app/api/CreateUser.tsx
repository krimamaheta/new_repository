import React, { useState } from "react";
import Route from "next/navigation"

const CreateUserPage: React.FC = async (value) => {

  
   try{
   
    const url = "https://localhost:44340/Api/Auth/register";
    console.log(value);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(value) 
    });
    if(res.ok){
        const data = await res.json();
        console.log(data);
        console.log("Hello to the registered user!");
        //alert("Registration success");
        alert(data.message);
        //route.push("/login");

    }
   
    else{
        
        alert("registarion fail");
        
    }
   } 
   catch(error)
   {
    
    console.error("sdf", error);
 
    
   }

    return (
        <div>
                <h2>registeration complete</h2>
        </div>
    );
};

export default CreateUserPage;