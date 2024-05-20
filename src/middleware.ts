import next from 'next';
import { NextServerOptions, NextServer } from 'next/dist/server/next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useSelector } from 'react-redux';
import { URL } from 'url';





// export const Middleware = () =>{
// const User = useSelector((state) => state.auth.user);
// console.log("middleware",User);
// }

// Middleware configuration to specify the paths that should be handled


import { getToken} from '@/lib/AuthToken';

const unauthenticatedPaths=['http://localhost:3000/landingpage','http://localhost:3000/login','http://localhost:3000/signup']

// Middleware function to handle authentication
export async  function middleware(request: NextRequest) {
    const token = await  getToken();
    const isLoggedIn = token !== null;
    const { pathname } = request.nextUrl;

    const publicPaths = ['/login', '/signup'];

    // Check if the user is accessing a public path

    console.log("token",token)

    const isPublicPath = publicPaths.includes(pathname);
    if(!token){
      if(unauthenticatedPaths.includes(request.url))
      return NextResponse.next();
      return NextResponse.redirect('http://localhost:3000/login') // Redirect to home page or another appropriate URL
    }else{
      
      if(unauthenticatedPaths.includes(request.url))
      return NextResponse.redirect('http://localhost:3000/home');
      return NextResponse.next();
    }

    if (isPublicPath) {
        // If accessing a public path
        if (isLoggedIn) {
            // Redirect logged-in users away from public paths
            return NextResponse.redirect(new URL("/")); // Redirect to home page or another appropriate URL
        }
    } else {
        // If accessing a protected path
        if (!isLoggedIn) {
            // Redirect users to login page if not logged in
            return NextResponse.redirect(new URL("/login")); // Redirect to login page
        }
    }

    // If no redirection needed, allow the request to proceed
    return NextResponse.next();
}

// Configuration for the middleware
// export const config = {
//     // Define the matcher for the paths where the middleware should be applied
//     matcher: ['/page','/quickNote']
// };

export const config = {
  matcher: [
    '/login',
    '/admin',
    '/admin/user',
    '/admin/event',
    '/admin/vendors',
    '/admin/booking',
    '/services',
    '/about',
    '/userprofile',
    '/home',

    '/vendor',
    '/vendor/allvendor',
    '/vendor/allvendor/addDecoration',

    '/vendor/caterer'
  ],
};



// export const getTokenFromCookie = () => {
//   const cookies = document.cookie.split(';').map(cookie => cookie.trim());
//   const tokenCookie = cookies.find(cookie => cookie.startsWith('access_token='));
//   if (tokenCookie) {
//     const token = tokenCookie.split('=')[1];
//     return token;
//   }
//   return null;
// };

// Middleware function to check user role and redirect if necessary
//export function middleware(req: NextRequest) {
  // Retrieve the cookies from the  headers
  // console.log("middleware running.");

  // const cookieHeader = req.headers.get('cookie')||'';
  // console.log('Cookie Header:', cookieHeader);

  // //const cookies = new URLSearchParams(cookieHeader);
  // const cookies = Object.fromEntries(cookieHeader.split('; ').map(cookie => {
  //   const [name, ...value] = cookie.split('=');
  //   return [name, value.join('=')];
  // }));
  // console.log('Parsed Cookies:',cookies);

  // //const userRole = cookies.get('userRole');

  // const userRole = cookies.userRole;
  // const accessToken = cookies.access_token;
  // console.log('Access Token:',accessToken);

  // if(!accessToken){
  //   //no token
  //   console.log('No access token found, redirecting to /landingpage');
  //   return NextResponse.redirect(new URL('/landingpage',req.url))
  // }
  // // If access token is present, allow the request to proceed
  // console.log('Access token found, proceeding to next middleware or page');
  // return NextResponse.next();

  // const token = getTokenFromCookie();
  // if (!token) {
  //   return NextResponse.redirect(new URL('/landingpage', req.url))
  // }
 // return NextResponse.next();

  // Redirect logic based on the user's role
  // switch (userRole) {

  //   case 'Admin':
  //     // Allow admins to proceed
  //     return NextResponse.next();

  //     case 'User':
  //       // Check if user has made a selection
  //       const selectedPage = cookies.get('selectedPage');
  //       let redirectUrl;
  //       switch (selectedPage) {
  //         case 'about':
  //           redirectUrl = '/about';
  //           break;
  //         case 'userprofile':
  //           redirectUrl = '/userprofile';
  //           break;
  //         case 'services':
  //           redirectUrl = '/services';
  //           break;
  //         default:
  //           redirectUrl = '/home';
  //       }
  //       // Redirect users based on their selection
  //       return NextResponse.redirect(new URL(redirectUrl, req.url));



  //   case 'Decorator':
  //       // Check if the decorator is already on the '/vendor' page
  //       if (req.nextUrl.pathname === '/vendor') {
  //         // If already on the '/vendor' page, redirect to '/vendor/allvendor/addDecoration'
  //         return NextResponse.redirect(new URL('/vendor/allvendor/addDecoration', req.url));
  //       } else {
  //         // If not on the '/vendor' page, redirect to '/vendor' page first
  //         return NextResponse.redirect(new URL('/vendor', req.url));
  //       }
  //   case 'Caterer':
  //       if (req.nextUrl.pathname === '/vendor/caterer') {
  //           return NextResponse.next();
  //         } else if (req.nextUrl.pathname === '/vendor') {
  //           // If the caterer is on the '/vendor' page, redirect to '/vendor/caterer'
  //           return NextResponse.redirect(new URL('/vendor/caterer', req.url));
  //         } else {
  //           // Redirect caterers to the '/vendor' page first
  //           return NextResponse.redirect(new URL('/vendor', req.url));
  //         }
  //   default:
  //     // Redirect unknown roles or unauthenticated users to the home page
  //     return NextResponse.redirect(new URL('/home', req.url));
  // }
