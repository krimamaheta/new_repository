import {NextResponse} from "next/server"
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../model/user";
import bcrypt from "bcryptjs"
//send data into api
 export async function POST(request){

    try {
        const {name,email,password}=await request.json();

        // console.log("name",name);
        // console.log("email",email);
        // console.log("password",password);
        await connectMongoDB();
        const hasedPassword=await bcrypt.hash(password,10);
        await User.create({name,email,password:hasedPassword});
        return NextResponse.json({message:'user registerd'},{status:201})
        
    } catch (error) {
        return NextResponse.json({message:'An error occure while  registering the user'},{status:500})
    }
  
}

