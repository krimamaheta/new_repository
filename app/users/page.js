import Link from 'next/link'
import getUser from "../../services/getUser"
const Users=async()=>{
    const user=await getUser();
    console.log(user);
    // const userlist=getUser();
    // const users=await userlist;
    // console.log(users)
    return(
       <div>
        <h2>user list</h2>
        {/* {
            user.map(item=>{
                <div><h2>name:</h2></div>
            })
        } */}
        {
            user.map((item)=>(
                <h1 key={item.key}>
                    <Link href={`/users/${item.id}`}>{item.firstName}</Link>
                   </h1>
            ))
        }
        {/* {
            user.forEach((ele)=(
                <h2>user name</h2>
            ))
        } */}
       </div>
    )
}
export default Users;