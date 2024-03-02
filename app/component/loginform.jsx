'use client'
import Link from "next/link"
import { useState } from "react"
import {signIn}from "next-auth/react"
import { useRouter } from "next/navigation"
export const LoginForm=()=>{

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[error,seterror]=useState("");

    let router=useRouter();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        // if(!email.includes('@')){
        //     seterror('email must require @');
        //     return;
        // }
    
        if (email=="") { 
         seterror("Email is required.");
         
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
           seterror(" Email is invalid")
        } 
      //  seterror(error);
        try {
           const res= await signIn('credentials',{
                email,password,redirect:false,
            });
            if(res.error){
                seterror("invalid crentials")
                return;
            }
            router.replace("/dashboard")
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div className="grid place-items-center h-screen">
        <div className="shdow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">Login</h1>
            <form onSubmit={handlesubmit} className="flex flex-col gap-3">
                <input  type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
                {error.email && <p style={{backgroundColor:"red"}}>{error.email}</p>} 
                <input  type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" required/>
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Log in</button>

                {
                    error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                    )
                }
             

                <Link  className="text-sm   mt-3 text-right" href={'/register'}>Don't have an account ? <span className="underline">Register</span></Link>
            </form>
        </div>
    </div>
    )
}