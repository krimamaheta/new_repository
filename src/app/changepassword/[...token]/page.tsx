"use client"
import React from "react";
import ChangePassword from "./../../component/Changepassword";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
const ChangepasswordPage=()=>{
    
    //get the token from the url
    const { token } = useParams<{ token: string }>();
    //const tokenString = typeof token === "string" ? token : "";
    return(
        <div>
           
            <ChangePassword params={{ token }}/>
        </div>
    )
}
export default ChangepasswordPage;
