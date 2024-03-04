//to delete value from ui
'use client'

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    console.log(props.id);
    const router=useRouter();
    const deletepro=async()=>{
        let data=await fetch(`http://localhost:3000/api/products/${props.id}`,{
            method:'DELETE',
        })
        data=await data.json();
        if(data.success)
        {
            alert("product deleted");
            //redirect product page
            router.push("/product");
        }
    }
    return<button onClick={deletepro}>Delete</button>
}