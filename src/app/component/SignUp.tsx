
'use client'
import React, { useState } from "react";
import styled from "styled-components";
import homeImage from "@/../public/decoration.png"
import { GlobalStyle } from "./../../Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "@/app/Schemas/page";
import Image from "next/image";
import CreateUserPage from "./../api/CreateUser"
import { useRouter } from "next/navigation";


const initialValues = {
    //here pass name
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  userRole:""
};



 export const SignUp = () => {
   const route = useRouter()
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        console.log(values);
         CreateUserPage(values);
        action.resetForm();
        route.push("/login");
      },
    });
    
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
   
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Sign Up </h1>
                <p className="modal-desc">
                Welcome! 
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="username" className="input-label">
                      UserName
                    </label>
                    <input
                      type="username"
                      autoComplete="off"
                      name="username"
                      id="username"
                      placeholder="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error">{errors.username}</p>
                    ) : null}
                  </div>
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
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
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
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirmPassword" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p className="form-error">{errors.confirmPassword}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="userRole" className="input-label">
                      User Role
                    </label>
                    <select
                      name="userRole"
                      id="userRole"
                      value={values.userRole}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" style={{ fontSize: "16px", color: "#333" }}>Select a role</option>
                      <option value="admin" style={{ fontSize: "16px", color: "#333" }}>Admin</option>
                      <option value="user" style={{ fontSize: "16px", color: "#333" }}>User</option>
                      <option value="decorator" style={{ fontSize: "16px", color: "#333" }}>Decorator</option>
                      <option value="Caterer" style={{ fontSize: "16px", color: "#333" }}>Caterer</option>
                      
                    </select>
                    {errors.userRole && touched.userRole ? (
                      <p className="form-error">{errors.userRole}</p>
                    ) : null}
                  </div>

                  <div className="modal-buttons">
                    {/* <a href="#" className="">
                      Want to register using Gmail?
                    </a> */}
                    <p className="sign-up">
                  Already have an account? <a href="/login">Sign In now</a>
                </p>
                    <button className="input-button" type="submit" >
                      Registration
                    </button>
                  </div>
                 {/* //onClick={()=>Route.push('/login')} */}
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
  );
};

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