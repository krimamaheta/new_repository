//create dynamic route
import {NextResponse} from 'next/server'
import mongoose from "mongoose"
import {connectionstr} from "../../../lib/db";
import {food}from "./../../../lib/model/product"

export const GET=async()=>{
    // await mongoose.connect(connectionstr);
    // console.log("hello")
    // return NextResponse.json({result:data});

   let data=[];
    try{
        await mongoose.connect(connectionstr);
         data =await food.find();
    }
    catch(error){
        alert('error');
    }
   
    console.log("hibbb");
  //  return new Response("welcome ...........")
   return NextResponse.json({result:data});
}