import {NextResponse}from 'next/server'
import {User}from "./../../../util/db"
// export const GET=()=>{
//     return NextResponse.json({name:'rukmani'})
// }

export const GET=()=>{
    const data=User;
    return NextResponse.json(data,{status:200})
}
//static api with post
export const POST=async(request)=>{
    const payload=await request.json();
    console.log(payload.name);
    if(!payload.name||!payload.age||!payload.email){
        return NextResponse.json({result:'all fiels must be require',success:false},{status:400})
    }
    return NextResponse.json({result:'create user succes...............!',success:true},{status:200})
}