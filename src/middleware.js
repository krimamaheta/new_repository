//import { url } from 'inspector';
// import {NextResponse}from 'next/server'


// function Middleware(request){
   
//         //console.log('middleware1234545....')
    
     
//         // if(request.nextUrl.pathname!="/login")
//      // {
//      return   NextResponse.redirect(new URL("/login",request.url))
//     //}   

// }
// export const config={
//     matcher:["/aboutus/:path*","/studentlist/:path*"]

// }

// export default Middleware;      

import { url } from 'inspector';
import {NextResponse} from 'next/server';
const Middleware=(request)=>{
    // if(request.nextUrl.pathname!='/login')
    // {
        return NextResponse.redirect(new URL('/login',request.url))
   // }
}

export const config={
    //matcher:["/aboutus/:path*","/studentlist/:path*"]
    matcher:["/aboutcollege/:path*"]
}
export default Middleware;