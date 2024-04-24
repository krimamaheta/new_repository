import React, { useState } from "react";
import Route from "next/navigation"
//import { useRouter } from "next/navigation";
const CreateUserPage: React.FC = async (value) => {

   // const route=useRouter();
    // const [registerError, setRegisterError] = useState("");
   try{
   
    const url = "https://localhost:44340/Api/Auth/register";
    console.log(value);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(value) // Wrap JSON.stringify(value) with parentheses
    });
    if(res.ok){
        const data = await res.json();
        console.log(data);
        console.log("Hello to the registered user!");
        alert("Registration success");
        //route.push("/login");

    }
   
    else{
        //return("registarion fails");
        alert("registarion fail");
        // const errorMessage = await res.text();
            
        //     if (res.status === 409) { // Assuming 409 is the status code for user already exists
        //         setRegisterError("User already exists. Please choose a different username or email.");
        //     } else {
        //         setRegisterError(`An error occurred: ${errorMessage}`);
        //     }
    }
   } 
   catch(error)
   {
    
    console.error("sdf", error);
    //setRegisterError("An error occurred during registration.");
    
   }

    return (
        <div>
                <h2>registeration complete</h2>
        </div>
    );
};

export default CreateUserPage;