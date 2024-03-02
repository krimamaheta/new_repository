//to connect with mongodb

import mongoose from "mongoose";
import { connectionstr } from "./db"
//import  {MONGO_URL}from "./../next-env"

export const connectMongoDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGODB_URI);
        console.log(connectionstr);
        await mongoose.connect(connectionstr);
        console.log("connected mongdb")
    } catch (error) {
        console.log("error connecting to mongodb", error);
    }
}