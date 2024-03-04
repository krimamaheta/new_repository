import { writeFile } from 'fs/promises';
import {NextResponse} from 'next/server'
//to send the data api use post method
export default  async function POST(request){
    const data=await request.formData();
    const file=data.get('file');
    if(!file)
    {
        return NextResponse.json({"message":"no image found",success:false})
    }
    //to convert data in to buffer
    const bytedata=await file.arrayBuffer();
    const buffer=Buffer.from(bytedata);
    const path=`./public/${file.name}`;
    await writeFile(path,buffer);

    return NextResponse.json({"message":"file uploaded",success:true})
}