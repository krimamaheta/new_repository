'use client'
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

const Layout=({children})=>{
    const currentpath=usePathname();
    console.log(currentpath);
    return(
        <div>
            <h2>comman layout for login page</h2>
            <ul className="menu">
                <li><h4>Login Navbar</h4></li>
                  <li>
                <Link href='/login/'>login page main</Link>
                </li>
                <li>
                <Link href='/login/loginstudent'>go to student login page</Link>
                </li>
                <li>
                <Link href='/login/loginteacher'>go to teacher login page</Link>
                </li>
            </ul>
         
            <br />
            
            {children}
        </div>
    )

}

export default Layout;

/*
  <h2>comman layout for login page</h2>
            <ul className="menu">
                <li><h4>Login Navbar</h4></li>
                  <li>
                <Link href='/login/'>login page main</Link>
                </li>
                <li>
                <Link href='/login/loginstudent'>go to student login page</Link>
                </li>
                <li>
                <Link href='/login/loginteacher'>go to teacher login page</Link>
                </li>
            </ul>
 */ 