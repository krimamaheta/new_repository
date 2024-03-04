//server side api call example

const FetchData=async()=>{
    try{
            let data=await fetch("https://dummyjson.com/recipes")
            data=await data.json();
            return data.recipes
    }
    catch(error)
    {
        console.log(error)
    }
}


const Recipes=async()=>{
    let recipe=await FetchData();
    console.log(recipe);
    return(
        <div>
            <h2>welcome recipes page</h2>
            <br/>
            {
                recipe.map((item,index)=>(
                    <div><h2 key={index}>{item.id},name:{item.name}</h2></div>
                ))
            }
        </div>
    )
}

export default Recipes; 