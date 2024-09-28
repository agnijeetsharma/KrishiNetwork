

import mongoose from 'mongoose'

const connectionSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    status:{
        type:String,       //pending ,accept,reject
        requried:true
    }

},{timestamps:true})

export const Connections=mongoose.model('Connections',connectionSchema);