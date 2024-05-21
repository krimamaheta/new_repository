"use client"

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { GlobalStyle } from "@/Styles/globalStyles";
import { useFormik } from "formik";
import { LogInSchema } from "../Schemas/page";
//import LogInUserPage from "@/app/api/LogInUser"
import homeImage from "./../../../public/chair.jpeg"
import { useDispatch, useSelector } from "react-redux";
//import  LogInUser  from "@/store/UserSlice";
import { useRouter } from "next/navigation";

import Link from "next/link"
import { login } from "@/Redux/authslice/authslice";
import setToken from "@/store/token";
import {setToken as authTokenSetToken} from "@/lib/AuthToken";

// const initialValues={
//     email:"",
//     password:""
// }
  const LogIn:React.FC=()=>{

    const router = useRouter();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [showForgotPassWord, setShowForgotPassword] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  console.log(e.target);

  setFormData((pre) => ({ ...pre, [name]: value }));
  console.log(formData);
};

const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const res = await fetch("https://localhost:44340/Api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(res);
    
    if (!res.ok) {
      alert(data.message);
    }
    if (res.ok) {
      console.log("res : ", res);
      console.log("login Successfully");
      const current_user = data.user;
      console.log(current_user);
      await alert("login successfully");

     //localStorage.setItem("user", JSON.stringify(current_user));
      console.log("data.token",data.token);
      await authTokenSetToken(data.token); 
      
     // AuthToken.set(res?.data?.token);
      dispatch(login({ user: current_user }));
      // document.cookie = `access_token=${current_user.token}; path=/; HttpOnly; Secure; SameSite=none; max-age=${3 * 60 * 60}`;
      // console.log("token",`${current_user.token}`);
      

      if(current_user.roles=="User"){
        window.location.href = "/home";
      }else if(current_user.roles=="Admin"){
        window.location.href="/admin"
      }else if(current_user.roles=="Decorator"||current_user.roles=="Caterer"){
        window.location.href="/vendor"
      }else{
        window.location.href="/landingpage"
      }




    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};


    // const[email,setemail]=useState("");
    // const[password,setpassword]=useState(""); 
  //   const dispatch=useDispatch();
  //   const navigate=useRouter();
  //   //redux state
  //   const{loading,error}=useSelector((state:any)=>state.user)
  //   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: LogInSchema,
  //     onSubmit: (values,action) => {
  //       console.log(
  //         "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
  //         values
  //       );
  //      dispatch(LogInUser(values));
  //       console.log(values);

        
  //       //  dispatch(LogInUser(values)).then((result:any)=>{
  //       //   if(result.payload){
  //       //     navigate.push('/login');
  //       //   }
  //       //  })
  //       // LogInUserPage(values);
  //     //  action.resetForm();
  //     },
  //   });
  //   console.log(values)
  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );
  // React.useEffect(() => {
  //   if (!loading && !error) {
  //     navigate.push('/home'); // Redirect to dashboard or any other page
  //   } 
  // }, [loading, error]);
    return(
        <>
        <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Log In </h1>
                <p className="modal-desc">
                Welcome! 
                </p>
                
                <form onSubmit={HandleSubmit}>
                 
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      
                    />
                    {/* {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null} */}
                  </div>

                  
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      
                    />





                    {/* {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null} */}
                  </div>

                  
                 
                    
                  <div className="modal-buttons">
                    {/* <a href="#" className="">
                      Want to register using Gmail?
                    </a> */}
                    <p className="sign-up">
                  Already have an account? <Link href="/signup">Sign Up now</Link>
                </p>
                <p className="sign-up">
                  Are You Forgot Password? <Link href="/forgotpassword">Forgot Password</Link>
                </p>
                
                    <button className="input-button" type="submit">
                      LogIn{/* {loading?'Loading...':'LogIn'} */}
                    </button>
                    {/* {
                      error && (
                        <div className="alert">
                          {error}
                          </div>
                      )
                    } */}
                  </div>
                 
                </form>
                {/* <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p> */}
              </div>
              <div className="modal-right">
                {/* <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt="image1"
                /> */}
                <Image src={homeImage} alt="home image"/>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>

    )
}

export default LogIn;
const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .alert{
    font:red;
    font-size: 1.4rem;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;
