
'use client'
//import Logo from "../../public/logo.png"
//import Link from "next/link"
// Import the logo image directly as a React component
import Image from 'next/image';
//import { UseSelector,useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { isAuthenticated, logout, user } from '@/Redux/authslice/authslice';
import { useEffect, useState } from 'react';
 import { UseSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { useRouter } from 'next/navigation';
// const LogoutButton = () => {
//   const dispatch = useDispatch();
  //  dispatch(logout());
//     window.location.href = "/home";

// };


// interface Users{
//   userId:string|null;
// }

const Logo = () => (
  <div>
  <Image src="/logo.png" alt="Logo" width={120} height={40} />
  </div>
);

const NavBar =() => {
  const route=useRouter();
  const dispatch = useDispatch();
  // const User=useSelector((state)=>state.auth.user);
  // console.log(User);



  // const Email=User.user.email;
  // console.log(Email)

  const isAuthenticatedValue = useSelector((state) => state.auth.isAuthenticate);
  const currentUser = useSelector((state) => state.auth.user);
  console.log(currentUser);

  // const useremail=currentUser.user.email
  // console.log(useremail)
   const Email = currentUser?.user?.email
 


 const handleLogout=()=>{
  dispatch(logout());
  route.push("/landingpage");
 }



  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Logo />
          <ul className="nav-links">
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            {/* <li>
              <a href="/categories">categories</a>
            </li> */}
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
           
           <li>
            {/* <Link href="/logout">LogOut</Link> */}<li>
  {/* Conditionally render Login link or Logout button */}
           {isAuthenticatedValue ? (<li>{Email}<button onClick={handleLogout}>LogOut</button></li>):(<li><Link href="/login">LogIn</Link></li>)}
       
</li>
            {/* {!isAuthenticated && (<li><Link href="/login">Login</Link></li>)} */}
           </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


/*

 <div className="w-full h-20 bg-emerald-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
*/