
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


const Logo = ({currentUser}:any) => (
  <div style={currentUser?.user?.roles === "Admin" ? { position:"absolute", left:"24px", top:"1px"} : {}}>
    <Image src="/logo.png" alt="Logo" width={120} height={40} />
  </div>
);

const NavBar = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const isAuthenticatedValue = useSelector((state:any) => state.auth.isAuthenticate);
  const currentUser = useSelector((state:any) => state.auth.user);
  console.log(currentUser);
  const Email = currentUser?.user?.email


  const handleLogout = async () => {
    await removeToken();
    dispatch(logout());
    route.push("/landingpage");
  }

  return (
    <div className="navbar" style={{position:"relative", margin:"0"}}>
      <div className="container" >
        <div className="navbar-content" >
          <Logo currentUser={currentUser} />
          <ul className="nav-links" style={currentUser?.user?.roles === "Admin" ? { color:'black',position:"absolute", right:"24px", top:"16px"} : {}}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            {
              currentUser?.user?.userID && ( <><li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/userprofile">Profile</Link>
              </li> </>)
            }
            <li>
              <li>
                {isAuthenticatedValue ?
                  (<li><span style={{marginRight:'1rem'}}>{`${Email}`}</span><button onClick={handleLogout}>LogOut</button></li>) :
                  (<><li><Link href="/login">Login</Link></li> <li><Link href="/signup">SignUp</Link></li></>)}
              </li>
             
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

