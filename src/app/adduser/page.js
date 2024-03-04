 
 'use client'
import { useState } from 'react'
 import './style.css'
 const AddUser=()=>{
    //to get the value we use the state 
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[email,setemail]=useState("");

//api call
    const adduser=async()=>{
         //console.log(name,age,email);    
        let  data=await fetch("http://localhost:3001/api/users",{
            method:'post',
            body:JSON.stringify({name,age,email})
        });
        data=await data.json();
        console.log(data)
    if(data.success)
    {
        alert('new user created succesfully.........................');
    }
    else{
        alert('data with error so please try again later..........');
    }
       
    }
return(
    <div className='add-user'>
        <h2>Add New User</h2>
        <input type="text" value={name} placeholder="Enter name"  onChange={(e)=>setname(e.target.value)}className='input-field'/>
        <input type="text"  value={age} placeholder="Enter age"  onChange={(e)=>setage(e.target.value)} className='input-field'/>
        <input type="text" value={email} placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} className='input-field'/>
    <button  onClick={adduser} className='btn'>Add user</button>
    </div>
)
}
export default AddUser; 