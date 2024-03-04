
'use client'
import { useEffect, useState } from "react";


const ProductList = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {

        let ismount = true;
        const FetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data = await data.json();
                console.log(data);
                if (ismount) {
                    setproduct(data.products);
                }
                
            }
            catch(error)
            {
                console.log('fetch error :',error);
            }
            
        }
        FetchData();
        return()=>{
            ismount=false; 
        }


    }, [])
    return (
        <div>
            <h3>wecome to product page</h3>
            {
                product.map((item,index)=>(
                    <h2 key={index}>{item.id},Name:{item.title},Price:{item.price}</h2>
                ))
            }
        </div>
    )
}

export default ProductList;