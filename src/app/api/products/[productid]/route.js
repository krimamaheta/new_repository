import { NextResponse } from "next/server";
import mongoose from "mongoose"
import { connectionstr } from "./.././../../../lib/db"
import { products } from "./../../../../lib/model/product"
import { request } from "http";

export async function PUT(request, content) {
    console.log(content);
    let productid = content.params.productid;
    let filter = { _id: productid }
    //to get body
    let payload = await request.json();
    console.log(payload);

    await mongoose.connect(connectionstr);
    const result = await products.findOneAndUpdate(filter, payload)
    console.log(result)

    return NextResponse.json({ result, success: true });

}

export async function GET(request,content){
//console.log(content)
let productid=content.params.productid;
let filter={_id:productid}
console.log(filter)

await mongoose.connect(connectionstr)
let result=await products.findById(filter)
return NextResponse.json({result,success:true})

}

export const DELETE=async(request,content)=>{
    let productid=content.params.productid;
    let record={_id:productid};
    await mongoose.connect(connectionstr);
    let result=await products.deleteOne(record);
    return NextResponse.json({result,success:true})
}