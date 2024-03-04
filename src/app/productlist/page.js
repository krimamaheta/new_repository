
//server components
import Product from './product.js'

async function fetchData(){
    try{
        let data=await fetch("https://dummyjson.com/products");
        data=await data.json();
        return data.products
    }
    catch(error)
    {
        console.log('fetch error',error)
    }


    // let data=await fetch("https://dummyjson.com/products");
    //     data=await data.json();
    //     return data.products;


}
const ProductList=async()=>{
    let products=await fetchData();
    console.log(products)
    return(
        <div><h2>welcome to product list page</h2>
        {
            products.map((item,index)=>(
                <div><h2 key={index}>{item.id},title:{item.title},price:{item.price}</h2>
                <Product price={item.price}/>
              </div>
            ))
        }
        </div>

    )
}
export default ProductList;