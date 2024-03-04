import { NextResponse } from "next/server"
import mongoose from "mongoose"
import {connectionstr} from './../../../lib/db'
import {products}from "./../../../lib/model/product"

// export const GET=async()=>{
// //   await mongoose.connect(connectionstr);
//   // let data=await products.find();
//    //console.log(data);
// let data=[];
//    try {
//     await mongoose.connect(connectionstr);
//     data=await products.find();
    
//    } catch (error) {
//         data={success:false} 
//    }
//     return NextResponse.json({result:true,data,success:true},{status:200});
// }

 export const GET=async()=>{

   let data=[];
   let success=true;
   try {
      await mongoose.connect(connectionstr);
      data=await products.find();
      
   } catch (error) {
      data={result:'error'}
      success=false;
   }
   return NextResponse.json({result:data,success})
 }




//to insert and save data
export const POST=async(request)=>{
   let payload=await request.json();

   await mongoose.connect(connectionstr);
   let product= new products(payload
      //{
      //static
      // name:'vivo 15 pro',
      // color:'blue',
      // company:'vivo',
      // price:'25000',
  // }
   )  
   let result=await product.save();
   return NextResponse.json({result,success:true},{status:200}) 
}