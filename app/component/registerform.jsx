
'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

// import { json } from "stream/consumers";

 function RegisterForm(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const[error,seterror]=useState("");
    const [isValid, setIsValid] = useState(true);
    const router=useRouter();
    console.log('name',name)
     const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      
    const handleInputChange = (event) => {
        const value = event.target.value;
        setemail(value);
        setIsValid(validateEmail(value));
      };
    const handlesubmit=async(e)=>{
        //to prevent refresh
        e.preventDefault();

        const requirements = [
            // Must be at least 8 characters
            password.length >= 6,
            // Must contain at least 1 uppercase letter
            /[A-Z]/.test(password),
            // Must contain at least 1 lowercase letter
            /[a-z]/.test(password),
            // Must contain at least 1 number
            /\d/.test(password)
          ];
          const isValid = requirements.every(Boolean)
          if(!isValid){
            seterror('please enter atleast one uppercase,one lowercase and one number');
            return;
          }

        if(password !== cpassword){
            seterror('please enter proper password');
            return;
        }
        if(!name|!email||!password){
            seterror('All fields are necessary.');
            return;
        }
        //to call api route
        //to get value from api
        try {

            let resuserexist=await fetch("http://localhost:3000/api/userexists",{
                method:'POST',
                headers:{
                    "Content-Type":"Application/json",
                },
                body:JSON.stringify({email})
            })
            const {user}=await resuserexist.json();
            if(user){
                seterror('User is Already exists.');
                return;
            }
            //to store the data into database   
            let res=await fetch("http://localhost:3000/api/register",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",  
                },
                body: JSON.stringify({name,email,password}),
            })
          let  data=await res.json();
            console.log(data);
            if(res.ok){
               // alert('user register success')
                let form=e.target;
                form.reset();
                //redirect home page(login page)
                router.push("/");
            }
            else{
                console.log('user registration failed');
            }
        } catch (error) {
            console.log('error during registration',error);
        }
    }

    return(<div className="grid place-items-center h-screen">
    <div className="shdow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">RegisterForm</h1>
        <form onSubmit={handlesubmit} className="flex flex-col gap-3">
             <input  type="text" required onChange={(e)=>setname(e.target.value)}  placeholder="FullName"/>
            <input  type="text"  required  onChange={handleInputChange}placeholder="Email"/>
            <input  type="password"  required onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
            <input  type="password"  required onChange={(e)=>setcpassword(e.target.value)} placeholder="ConfirmPassword"/>
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
           {
            error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}</div>

            )
           }
           
        
            <Link  className="text-sm   mt-3 text-right" href={'/register'}>Already have an account ?<span className="underline">Login</span></Link>
        </form>
    </div>
</div>)
}

export default RegisterForm;