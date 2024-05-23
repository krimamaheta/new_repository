
'use client'
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { isAuthenticated, logout, user } from '@/Redux/authslice/authslice';
import { useEffect, useState } from 'react';
import { UseSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { useRouter } from 'next/navigation';
import { removeToken } from '@/lib/AuthToken';


const Logo = () => (
  <div>
    <Image src="/logo.png" alt="Logo" width={120} height={40} />
  </div>
);

const NavBar = () => {
  const route = useRouter();
  const dispatch = useDispatch();
 

  const isAuthenticatedValue = useSelector((state) => state.auth.isAuthenticate);
  const currentUser = useSelector((state) => state.auth.user);
  console.log(currentUser);

  // const useremail=currentUser.user.email
  // console.log(useremail)
  const Email = currentUser?.user?.email



  const handleLogout = async () => {
    await removeToken();
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
              <Link href="/userprofile">Profile</Link>
            </li>
            <li>
              <li>

                {isAuthenticatedValue ?
                  (<li>{Email}<button onClick={handleLogout}>LogOut</button></li>) :
                  (<li><Link href="/login">Login</Link></li>)}
              </li>
             
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

