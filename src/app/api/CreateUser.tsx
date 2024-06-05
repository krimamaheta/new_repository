    import React, { useState } from "react";
    import { useRouter } from "next/navigation"

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
            console.log("data123",data);
            console.log("Hello to the registered user!");
            //alert("Registration success");
            alert(data.message);
            //route.push("/login");

        }
    
        else{
            const errorMessage = await res.text(); // Get error message from response body
                if (res.status === 500 && errorMessage === "User already exists!") {
                    alert("User already exists! Please try with a different email.");
                } else {
                    alert("Registration failed: " + errorMessage);
                }
            //alert("registarion fail");
            
        }
    } 
    catch(error)
    {
        
        console.error("sdf", error);
        alert("An unexpected error occurred.");
        
    }
    // const CreateUserPage: React.FC = () => {
       
      
    //     const handleRegister = async (value: any) => {
          
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         const route = useRouter();
    //       try {
           
    //         const url = "https://localhost:44340/Api/Auth/register";
    //         console.log(value);
    //         const res = await fetch(url, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(value) 
    //         });
    //         if (res.ok) {
    //           const data = await res.json();
    //           console.log("data123", data);
    //           console.log("Hello to the registered user!");
    //           alert(data.message);
    //           route.push("/login");
    //         } else {
    //           const errorMessage = await res.text();
    //           if (res.status === 500 && errorMessage === "User already exists!") {
    //             alert("User already exists! Please try with a different email.");
    //           } else {
    //             alert("Registration failed: " + errorMessage);
    //           }
    //         }
    //       } catch (error) {
    //         console.error("Error during registration:", error);
    //         alert("An unexpected error occurred.");
    //       }
    //     };
      

        return (
            <div>
                    <h2>registeration complete</h2>
            </div>
        );
    };

    export default CreateUserPage;