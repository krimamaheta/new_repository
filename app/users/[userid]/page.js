import getuser from "../../../services/getUser"

const UserId=async(props)=>{
    const user=await getUser();
    const currentid=props.params.userId;
    const userdata=user[currentid-1];
    console.log(user[currentid-1]);

return(
    <div>
        <h2>welcome user detail page</h2>
        <h2>{userdata.id}</h2>
        <h2>{userdata.firstName}</h2>
        <h2>{userdata.lastName}</h2>

    </div>
)
}

export async function generateStatticParams(){
const user=await getUser();
return user.map(item=>{
    userid:user.id.toString();
})
}

export default UserId;