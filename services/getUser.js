//to api call server side

const  getUser=async()=>{
    try{

    const data=await fetch("https://dummyjson.com/users");
    result=await data.json();
    return result.users;
    }
    catch(error)
    {
        console.log('fetch error',error)
    }
}

export default getUser;