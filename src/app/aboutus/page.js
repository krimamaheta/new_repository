'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutUs=()=>{
    const router=useRouter();
    return (
        <div><h2 className="heading">about us page</h2>
            <br/>
        <Link href='/'>go to home page</Link>
        <div className="button1">
            <button onClick={()=>router.push('/')}>go to home page</button>

        </div>

        <br />
        <Link href='/aboutus/aboutcollege'>go to college page</Link>
        <br />
        <Link href='/aboutus/aboutstudent'>go to student page</Link>
        
        </div>

    )
}

export default AboutUs;