import Link from "next/link";
import  DeleteProduct from "./../../lib/deleteproduct"
//integrate with api
const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    if (data.success) {
        return data.result;
    }
    else {
        return { success: false }
    }
}


const ProductList = async () => {
    //to call api
    const product = await getProducts();
    console.log(product);
    return (
        <div>
            <h2>Product List</h2>
            <table border="2">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td><Link href={"product/"+item._id}>Edit</Link>
                                <DeleteProduct id={item._id}/></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
export default ProductList;