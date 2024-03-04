import mongoose from "mongoose";
//to fetch the value from the mongdb

const productModel=mongoose.Schema({
    name:String,
    color:String,
    company:String,
    price:String,
})

export const products=mongoose.models.products||mongoose.model("products",productModel)
