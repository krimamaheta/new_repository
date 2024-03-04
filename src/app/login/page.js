'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login=()=>{
    const router=useRouter();
    const handleclick=(path)=>{
        router.push('/login/'+path)
    }
    return(
        <div><h1 className="heading">login page</h1><br/>
        <Link href='/'>go to home page</Link>
        <div className="button1">
            <button onClick={()=>router.push('/')}>go to home page </button>
        </div>
        <br />
        <button onClick={()=>handleclick('loginteacher')}>go to teacher page</button>
        <br />
        <br />
        <button onClick={()=>handleclick('loginstudent')}>go to student page</button>
        </div>
        
    )
}

export default Login;

//   <button onClick={()=>router.push('/login/loginstudent')}>go to student page</button>