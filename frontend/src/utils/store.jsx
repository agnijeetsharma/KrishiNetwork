import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cropSlice from "./cropSlice";


const Store=configureStore({
    reducer:{
      user:userSlice,
      crop:cropSlice
    }
})
export {Store}