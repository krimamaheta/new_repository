import { NextResponse } from 'next/server'
import { User } from "./../../../../util/db"
// export const GET=()=>{
//     return NextResponse.json({name:'rukmani'})
// }

export const GET = (request, content) => {
    const data = User;
    //  console.log(data,content.params.id)
    //filter the data
    const userdata = data.filter((item) => item.id == content.params.id);
    return NextResponse.json(userdata.length == 0 ? { result: 'no data found', sucess: false } : { result: userdata[0], success: true }, { status: 200 })
}

// export const PUT = async (request, content) => {

//     let payload = await request.json();
//     let userid = content.params.id;
//     //payload.id=content.params.id
//     console.log(userid)
//     console.log(payload);

//     if(!payload.name||!payload.email||!payload.age||!payload.id)
//     {
//         return NextResponse.json({result:'data is not valid ',success:false},{status:400});
//     }

//     return NextResponse.json({result:payload,success:true},{status:200});

// }

export const PUT=async(request,content)=>{
    const payload=await request.json();
    //const userid=content.params.id;
    payload.id=content.params.id
    console.log(payload);

    if(!payload.name||!payload.email||!payload.age||!payload.id)
    {
        return NextResponse.json({result:'all field must be require',success:false},{status:400})
    }   
    return NextResponse.json({result:payload,success:true},{status:200})
}

export const DELETE=(request,content)=>{
    //api /20 get karva mate id use thay
    let id=content.params.id;
    if(id){
        return NextResponse.json({result:'deleted succes',success:true},{status:200})
    }
    return NextResponse.json({result:'please try again letter...',success:false},{status:400})
}