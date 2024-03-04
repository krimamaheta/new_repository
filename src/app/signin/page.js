
'use client'
import {signInWithGooglePopup,signInWithGoogleRedirect}from"./firebase"
import { useRef } from "react";
import {auth}from './firebase';
import {createUserWithEmailAndPassword}from"firebase/auth"
 const Page=()=>{
    const signin=async()=>{
        const response=await signInWithGooglePopup();
        console.log(response);
    }

    const redirect=async()=>{
        const response=await signInWithGoogleRedirect();
        console.log(response);
    }
    return(
        <div>sign in page
            <br/>

            <button onClick={signin}>sign in google popup</button>
            <br/>
            <button onClick={redirect}>sign in with redirect</button>
        </div>
    )
 }
 export default Page;
 
//  const Page=()=>{
//     const emailref=useRef();
//     const passref=useRef();
//     const formsub=()=>{
//         const email=emailref.current.value;
//         const password=passref.current.value;
//         createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert('success......')
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage,'error...........')
//     // ..
//   });

//     }
//     return(
//         <div>firebase app
//         <form onSubmit={formsub}>
//             <input type="email" placeholder="email" ref={emailref}/>
//             <input type="password" placeholder="password"ref={passref}/>
//             <button>signin</button>
//         </form>
//         </div>
//     )
// }

// export default Page;