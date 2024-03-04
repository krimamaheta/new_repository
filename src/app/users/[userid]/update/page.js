
'use client'

import { useEffect, useState } from "react";
import "./../../../adduser/style.css"


//to get the id use params
 const Update=({params})=>{
    const id=params.userid;
    console.log(id);
    //console.log(params.userid);

    const [name,setname]=useState("");
    const  [age,setage]=useState("");
    const [email,setemail]=useState("");
    useEffect(()=>{
        UserId();
    },[])

    const UserId=async()=>{
        try{
            let data=await fetch(`http://localhost:3000/api/users/${id}`);
            if(!data.ok)
            {
                throw new Error("fail to fetch user details");
            }
            data=await data.json();
            setname(data.result.name);
            setage(data.result.age);
            setemail(data.result.email);
        }
        catch(error)
        {
            console.log('fetch error',error)
        }
   
    }
    const updateuser=async()=>{
        console.log("hello")
        console.log(name,age,email,id);

        //to update value in api so call put api
        let result=await fetch(`http://localhost:3000/api/users/20/${id}`,{
            method:'POST',
            body:JSON.stringify({name,email,age})
        });
        result=await result.json();
        console.log(result);
        if(result.success)
        {
            alert('update success')
        }
        else{
            alert('try again letter')
        }
    }
    return(
        <div className="border">
          
            <form>
                <center>
                <h1>update user details</h1>
                <input type="text" placeholder="Enter Name" className="input-field" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="text" placeholder="Enter Age" className="input-field" value={age} onChange={(e)=>setage(e.target.value)}/>
                <input type="text" placeholder="Enter Email" className="input-field" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <button className="btn" onClick={updateuser}>update user</button>
                </center>
            </form>
        </div>
    )
}

export default Update;