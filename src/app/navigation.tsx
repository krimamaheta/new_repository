
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
import logo from "./../../public/logo1 (1).png"


const Logo = ({ currentUser }: any) => (
  <div style={currentUser?.user?.roles === "Admin" ? { position: "absolute", left: "24px", top: "1px" } : {}}>
    <Image src="/logo.png" alt="Logo" width={120} height={40} />
  </div>
);
// const Logo = ({ currentUser }: any) => (
//   <div style={currentUser?.user?.roles === "Admin" ? { position: "absolute", left: "24px", top: "1px" } : {}}>
//     <Image src={logo} alt="Logo" width={300} height={40} />
//   </div>
 
// );



const NavBar = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const isAuthenticatedValue = useSelector((state: any) => state.auth.isAuthenticate);
  const currentUser = useSelector((state: any) => state.auth.user);
  console.log(currentUser);
  const Email = currentUser?.user?.email
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client side
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server side // Added block
  }

  const handleLogout = async () => {
    await removeToken();
    dispatch(logout());
    route.push("/landingpage");
  }

  return (
   
    // <div  className="navbar" style={{ position: "relative", margin: "0",}}>
    //   <div className="container">
    //     <div className="navbar-content">
    //       <Logo currentUser={currentUser} />
    //       {isClient && ( // Render only on the client side
    //         <ul className="nav-links" style={currentUser?.user?.roles === "Admin" ? { color: 'black', position: "absolute", right: "24px", top: "16px" } : {}}>
    //           <li>
    //             <Link href="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link href="/about">About Us</Link>
    //           </li>
  
    //           <>
    //             {/* Check if the user is a "User" */}
    //             {isAuthenticatedValue && currentUser?.user?.roles === "User" && (
    //               <>
    //                 <li>
    //                   <Link href="/services">Services</Link>
    //                 </li>
    //                 <li>
    //                   <Link href="/userprofile">Profile</Link>
    //                 </li>
    //               </>
    //             )}
    //           </>
    //           <>
    //             {isAuthenticatedValue && currentUser?.user?.roles === "Caterer" && (
    //               <>
    //                 <li>
    //                   <Link href="/vendor/caterer">Catering</Link>
    //                 </li>
    //               </>
    //             )
    //             }
    //           </>

    //           {isAuthenticatedValue && currentUser?.user?.roles === "Decorator" && (
    //             <>
    //               <li><Link href="/vendor/allvendor">Decoration</Link></li>
    //             </>
    //           )}


    //           {/* Conditionally render login/signup or logout link */}
    //           {isAuthenticatedValue ? (
    //             <li>
    //               <Link href="#" onClick={handleLogout}>{Email} LogOut</Link>
    //             </li>
    //           ) : (
    //             <>
    //               <li><Link href="/login">Login</Link></li>
    //               <li><Link href="/signup">SignUp</Link></li>
    //             </>
    //           )}
    //         </ul>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="navbar" style={{ position: "relative", margin: "0" }}>
    <div className="container">
      <div className="navbar-content">
        <Logo currentUser={currentUser} />
        <ul className="nav-links" style={currentUser?.user?.roles === "Admin" ? { color: 'black', position: "absolute", right: "24px", top: "16px" } : {}}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>

          {isAuthenticatedValue && currentUser?.user?.roles === "User" && (
            <>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/userprofile">Profile</Link>
              </li>
            </>
          )}

          {isAuthenticatedValue && currentUser?.user?.roles === "Caterer" && (
            <li>
              <Link href="/vendor/caterer">Catering</Link>
            </li>
          )}

          {isAuthenticatedValue && currentUser?.user?.roles === "Decorator" && (
            <li>
              <Link href="/vendor/allvendor">Decoration</Link>
            </li>
          )}

          {isAuthenticatedValue ? (
            <li>
              <Link href="#" onClick={handleLogout}>{Email} LogOut</Link>
            </li>
          ) : (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">SignUp</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default NavBar;

