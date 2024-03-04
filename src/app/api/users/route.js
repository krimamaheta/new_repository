import { NextResponse } from "next/server";
import {User} from "./../../../util/db"
// export  async function GET(request){
//     return NextResponse.json({name:'ram',age:29,city:'ayodhya'},{status:201})
// }

export async function GET(request,content)
{
    //console.log(content);
    const data=User;
    return NextResponse.json(data,{status:200})

}