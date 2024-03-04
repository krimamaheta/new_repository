//api intregrets
const getUsers = async () => {
    try {
        let data = await fetch("http://localhost:3001/api/users");
        data = await data.json();
        return data;
    }
    catch (error) {
        console.log('fetch error:', error);
    }
}

const User = async () => {
    let user = await getUsers();
    console.log(user);
    return (
        <div>
            <h1>user list</h1>
            {/* {
                user.map((item)=>(
                    <h2 key={item.id}>{item.id}</h2>
                ))
            } */}
        </div>
    )
}

export default User;