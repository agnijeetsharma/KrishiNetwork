import { createSlice } from "@reduxjs/toolkit";


const cropSlice=createSlice({
    name:"crop",
    initialState:{
    },
    reducers:{
        addCrop:(state,action)=>{
            // state.crops=action.payload;
            state=Object.assign(state,action.payload);
        }
        ,
        removeCrop:(state,action)=>{
            state.crops=state.crops.filter((crop)=>crop.id!==action.payload);
            }
    }
})
export const {addCrop,removeCrop}=cropSlice.actions
export  default cropSlice.reducer