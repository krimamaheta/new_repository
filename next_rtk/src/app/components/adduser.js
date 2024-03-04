'use client'
import { useState } from "react"
import {adduser } from "../redux/slice"

export default function AddUser(){

    const[name,setname]=useState("");
    const userdisplatch=()=>{
        console.log(name);
    }
    return(<div className="add-user">
        <h3>user list</h3>
        <input type="text"  onChange={(e)=>setname(e.target.value)} className="add-user-input" placeholder="enter user "/>
      
        <button onClick={userdisplatch}className="add-user-btn">add user</button>
        </div>)
}