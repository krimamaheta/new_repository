'use client';
import Script from "next/script";

const UserList=()=>{
    return(
        <div><h2>user plist page</h2>
        <Script 
        src="/location.js"
        onLoad={()=>{
            console.log("file is loaded");
        }}/>
        </div>
    )
}
export default UserList;