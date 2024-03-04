'use client'
import { useRef } from 'react';
import {getAuth}from 'firebase/auth';
import { get } from 'http';

const Login = () => {
    const email= useRef();
    const password = useRef();
    const submit = (event) => {
        event.preventdefault();
        let e = email.current.value;
        let p = password.current.value;

        const auth=getAuth();
        createUserWithEmailAndPassword(auth, e, p)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('sucess....log in')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    return (
        <div>
            <form onSubmit={submit}>
                <center>
                <h2>login</h2>
                <input type="email" placeholder="email" ref={email} required /><br />
                <input type="password" placeholder="password" ref={password} required /><br />
                <button type="submit">log in</button>
                </center>
               
              
            </form>

        </div>
    )
}
export default Login;