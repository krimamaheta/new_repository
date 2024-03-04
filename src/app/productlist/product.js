'use client'
const Product=({price})=>{
    console.log(price)
    return(
        <div>
            <button onClick={()=>alert(price)}>check price</button>
        </div>
    )
}

export default Product;