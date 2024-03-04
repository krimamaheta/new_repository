'use client'
import {useState,useEffect}from 'react'

const CartList=()=>{
    const[card,setcard]=useState([]);
   
       useEffect(()=>{
        let ismount=true;
        const FetchData=async ()=>{
        try{
            let data=await fetch("https://dummyjson.com/carts")
            data=await data.json();
            console.log(data);
            if(ismount){
                setcard(data.carts)
            }
        }
        catch(error)
        {
            console.log('error fetch',error);
        }
    }
    FetchData();
    return()=>{
        ismount=false;
    }
       },[])
       return(
        <div><h2>welcome card page</h2>
        <br />
        {
                card.map((item,index)=>(
                    <h2 key={index}>no:{item.id},total:{item.total}</h2>
                ))
        }   
        </div>
       )
       
    }
   


export default CartList;