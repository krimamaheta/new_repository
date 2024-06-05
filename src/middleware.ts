import next from 'next';
import { NextServerOptions, NextServer } from 'next/dist/server/next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useSelector } from 'react-redux';
import { URL } from 'url';
import { getToken} from '@/lib/AuthToken';

const unauthenticatedPaths=['http://localhost:3000/landingpage','http://localhost:3000/about','http://localhost:3000/login','http://localhost:3000/signup']

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
      return NextResponse.redirect('http://localhost:3000/login') 
    }else{
      
      if(unauthenticatedPaths.includes(request.url))
      return NextResponse.redirect('http://localhost:3000/home');
      return NextResponse.next();
    }

}

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


