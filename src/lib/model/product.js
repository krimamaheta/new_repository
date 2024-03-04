import mongoose from "mongoose";

const foodModel=mongoose.Schema({
    name:String,
    price:String,
})

export const food =mongoose.models.food||mongoose.model("food",foodModel);