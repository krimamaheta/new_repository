
"use client"
//import UserProfile from "@/app/component/UserProfile";
import React, { useState } from "react";
import style from "./../vendor/vendorStyle.module.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useSelector } from "react-redux";
import NavBar from "../navigation";
import Footer from "../component/footer";
import UserProfile from "../component/UserProfile";

const UserProfiles=()=>{
    return(
        <div>
            <NavBar/>
            <UserProfile/>
            <Footer/>
        </div>
    )
}

export default UserProfiles;
