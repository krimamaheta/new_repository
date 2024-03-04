import { NextResponse } from "next/server";



 export async  function GET(request,content){
    console.log(content);
    const studentdetail=content.params.student;
    console.log(studentdetail)
   // return new Response("welcome new studenr page")
   return NextResponse.json({result:studentdetail,success:true},{status:200})
}
//export default GET;
