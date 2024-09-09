import mongoose from 'mongoose'

const FarmerSchema=new mongoose.model.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true})