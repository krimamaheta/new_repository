'use client'
// import { useState } from "react";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth}from"./firebase"
const SignIn = () => {
    // const[firstname,setfirstname]=useState("");
    // const[lastname,setlastname]=useState("");
    // const[email,setemail]=useState("");
    // const[password,setpassword]=useState("");
    // const[cpassword,setcpassword]=useState("");
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const password = useRef();
    const cpassword = useRef();

    const handlesub = (event) => {
        event.preventDefault();
        let fn = fname.current.value;
        let ln = lname.current.value;
        let em = email.current.value;
        let pass = password.current.value;
        let cpass = cpassword.current.value;
        //const auth = getAuth();
        createUserWithEmailAndPassword(auth, em, pass)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert('success..........')
 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage,'errorr........')

            });


    }


    return (
        <div>
            <form onSubmit={handlesub}>
                <center>
                    <h2>Sign In</h2>
                    <input type="text" placeholder="firstname" ref={fname} required /><br />
                    <input type="text" placeholder="lastname" ref={lname} required /><br />
                    <input type="email" placeholder="email" ref={email} required /><br />
                    <input type="password" placeholder="password" ref={password} required /><br />
                    <input type="password" placeholder="confirmpassword" ref={cpassword} required /><br />
                    <button type="submit">sign in</button>
                </center>
            </form>

        </div>
    )
}
export default SignIn;  