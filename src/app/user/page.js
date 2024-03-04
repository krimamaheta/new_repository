//to apply inline css


'use client'

import { useState } from "react";

const Page=()=>{
    const[h3style,seth3style]=useState({backgroundColor:'pink'})
    return(
        <div><h2 style={{backgroundColor:"pink"}}>user page</h2>
        <h2>heading 2</h2>
        <h3 style={h3style}>heading 3 for user</h3>
        <button onClick={()=>seth3style({backgroundColor:'violet'})}>upadte colour</button>

        
        </div>
    )
}

export default Page;