
'use client'
import { useEffect, useState } from "react";

const Reciepies = () => {
//to fetch the data from backend
const[product,setproduct]=useState([]);
    useEffect(() => {
        let ismount = true;
        const FetchData = async () => {
            try {
                if (ismount) 
                {
                    let data = await fetch("https://dummyjson.com/recipes");
                    data = await data.json();
                    console.log(data);
                    setproduct(data.recipes)

                }
            }
            catch (error) {
                console.log('fetch error', error)
            }
        }
        FetchData();
        return()=>{
            ismount=false;
        }

    })
    return (
        <div>welcomt to recepies page
            <br />
            <br/>
            {
                    product.map((item)=>(
                        <h2>{item.id},Name:{item.name}</h2>
                    ))
            }

        </div>
    )
}

export default Reciepies;