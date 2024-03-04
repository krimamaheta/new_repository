import { NextResponse } from "next/server";
import {User} from "./../../../../util/db"

export async function GET(request,content)
{
    const data=User;
    //console.log(data,content.params.id)
   

    const userdata=data.filter((item)=>item.id==content.params.id)
    return NextResponse.json(userdata.length==0?{result:'No Data Found',success:false}:{result:userdata,success:true},
    {status:200})

}