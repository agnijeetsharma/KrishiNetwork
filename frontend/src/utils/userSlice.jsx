import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    //   user:null,
  },
  reducers: {
    loginUser: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    logoutUser: (state) => {
      state.user = null;
    },
    updateUser:(state,action)=>{
      state = Object.assign(state, action.payload);
        
    }
  },
});
export const { loginUser,logoutUser ,updateUser } = userSlice.actions;
export default userSlice.reducer;
