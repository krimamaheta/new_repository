"use client"
import React from "react";
//import ChangePassword from "../app/component/Changepassword";
import ChangePassword from "./../../component/Changepassword";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
const ChangepasswordPage=()=>{
    //const route=useRouter();
   // const {token}=route.query;
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
