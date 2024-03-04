
'use client'
function DeleteUser(props) {
    const userId = props.id;
    console.log(userId)
    //to call api
    const deleteuser = async () => {
        let res = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: 'DELETE',
        })
        res = await res.json();
        if (res.success) {
            alert("user is deleted")
        }else {alert('try again...')}
    }
    return (
        <div>
            <h2>hello</h2>
            <button onClick={deleteuser}>Delete</button>
        </div>

    )
}
export default DeleteUser;