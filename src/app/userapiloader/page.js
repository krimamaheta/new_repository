//make server api to call loader
 export async function UserData(){
    try{
        let data=await fetch("https://dummyjson.com/users")
        data=await data.json();
        return data.users;
    }
    catch(error)
    {
        console.log('fetch error',error)
    }
}
const UserApi=async()=>{

    let users=await UserData();
    console.log(users)
    return(
        <div>
            <h1>user list</h1>
            {
                users.map((item)=>(
                    <div><h2>{item.id}user name:{item.firstName}</h2></div>
                ))
            }
        </div>
    )
}

//export default UserData;
export default UserApi;