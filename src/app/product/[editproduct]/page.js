
'use client';
import { useEffect, useState } from "react";
import "./../../style.css"
import Link from "next/link";
import { useRouter } from "next/navigation";

//import {redirect} from "next/navigation"
// import { json } from "stream/consumers";
const AddProduct = ({ params }) => {
    const [name, setname] = useState("");
    const [color, setcolor] = useState("");
    const [price, setprice] = useState("");
    const [company, setcompany] = useState("");

    useEffect(() => {
        console.log(params.editproduct)
        getData();
    }, [])
//fetch data
    const getData=async()=>{
        let id=params.editproduct;
        let data=await fetch(`http://localhost:3000/api/products/${id}`);
        data=await data.json();
        console.log(data);
        if(data.success)
        {
            //let result=data.result;
            //here data prefile the form
            setname(data.result.name);
            setcolor(data.result.color) 
            setprice(data.result.price);
            setcompany(data.result.company)
           
        }
    }
    const handleupdate=async()=>{
     //   const router=useRouter();
        let id=params.editproduct;
        let data=await fetch(`http://localhost:3000/api/products/${id}`,{
            method:'PUT',
            body:JSON.stringify({name,color,price,company})
        });
        data=await data.json();
        if(data.result){
            alert('product has been updated');
        //    redirect('/product')
       // router.push("/product")
        }
    }
    // const addproduct=async()=>{
    //     console.log(name,price,company,color);
    //     //tro send data to api
    //     let result=await fetch("http://localhost:3000/api/products",{
    //         method:'POST',
    //         body:JSON.stringify({name,color,price,company})
    //     });
    //     result=await result.json();
    //     if(result.success)
    //     {
    //         alert("new product added");
    //     }

    // }
    return (
        <div><h1>Update  Product page</h1>

            <input type="text" required value={name} onChange={(e) => setname(e.target.value)} className="input" placeholder="Enter Product Name" />
            <input type="text" required value={color} onChange={(e) => setcolor(e.target.value)} className="input" placeholder="Enter Product Color" />
            <input type="text" required value={price} onChange={(e) => setprice(e.target.value)} className="input" placeholder="Enter Product Price" />
            <input type="text" required value={company} onChange={(e) => setcompany(e.target.value)} className="input" placeholder="Enter Product Company" />
            <button className="btn"  onClick={handleupdate}>Upadate Product</button>
            <button type="reset" className="btn">Reset</button>
            <Link href="/product">go to product List</Link>

        </div>
    )
}

export default AddProduct;