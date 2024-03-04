
import Link from "next/link";
import './aboutus.css'


const Layout=({children})=>{

    return(
        
        <div>
            <h1>comman for all about page</h1>

            <ul className="menu">
                <h2 className="heading">naviagation bar</h2>
                <li>
                    <Link href='/aboutus'>go to about page</Link>
                </li>
                <li>
                    <Link href='/aboutus/aboutcollege'>about college</Link>
                </li>
                <li>
                    <Link href='/aboutus/aboutstudent'>about student</Link>
                </li>
            </ul>
            <br />
            <br />
            <br />
            {children}
        </div>
    )
}

export default Layout;