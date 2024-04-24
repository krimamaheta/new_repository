"use client"
import React from "react";
import LogIn from "./../component/LogIn";
import { Provider } from "react-redux";
import store from "@/Redux/store";
 const LogInpage=()=>{
    return(
        <>
        <Provider store={store}>
        <LogIn/>
        </Provider>
        </>
    )
}
export default LogInpage;