

import Link from 'next/link';
import "../adduser/style.css"
import DeleteUser from "../../util/DeleteUser"
//to call api
async function getData() {
    let data = await fetch("http://localhost:3001/api/users");
    data = await data.json();
    return data;
}

export default async function Page() {
    const user = await getData();
    console.log(user)
    return (
        <div className='user-item'><h1>user list</h1><br />
            {
                user.map((item) => (
                    <h2>
                        <span>  <Link href={`users/${item.id}`}>{item.name}</Link></span>
                        <span>  <Link href={`users/${item.id}/update`}>Edit</Link></span>
                        <span><DeleteUser id={item.id}/></span>
                    </h2>
                ))
            }
        </div>
    )
}
