//fetch api
async function getData(id){
    let data=await fetch(`http://localhost:3001/api/users/${id}`);
    data=await data.json();
    return data.result;
}


export default async function Page({params}){
  //  console.log(params.userid);
    let user=await getData(params.userid)
    //console.log(user)
    return(
        <div>
            <h2>user detail list</h2><br/>
            <h4>id:{user.id}</h4>
            <h4>Name:{user.name}</h4>
            <h4>email:{user.email}</h4>
        </div>
    )
}