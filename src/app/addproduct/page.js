
'use client';
import { useState } from "react";
import "./../style.css"
import Link from "next/link";
// import { json } from "stream/consumers";
const AddProduct=()=>{
    const [name,setname]=useState("");
    const [color,setcolor]=useState("");
    const [price,setprice]=useState("");
    const [company,setcompany]=useState("");

    const addproduct=async()=>{
        console.log(name,price,company,color);
        //tro send data to api
        let result=await fetch("http://localhost:3000/api/products",{
            method:'POST',
            body:JSON.stringify({name,color,price,company})
        });
        result=await result.json();
        if(result.success)
        {
            alert("new product added");
        }

    }
    return(
        <div><h1>Add Product page</h1>

        <input type="text" required value={name} onChange={(e)=>setname(e.target.value)} className="input" placeholder="Enter Product Name"/>
        <input type="text"   required value={color} onChange={(e)=>setcolor(e.target.value)} className="input" placeholder="Enter Product Color"/>
        <input type="text" required   value={price} onChange={(e)=>setprice(e.target.value)} className="input" placeholder="Enter Product Price"/>
        <input type="text"  required value={company} onChange={(e)=>setcompany(e.target.value)} className="input" placeholder="Enter Product Company"/>
        <button className="btn" onClick={addproduct}>Add Product</button>
        <button type="reset" className="btn">Reset</button>
        <Link href="/">go to home page</Link>

        </div>
    )
}

export default AddProduct;