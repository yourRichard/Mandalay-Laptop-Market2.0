import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUserDetail: (state,action)=>{
      state.user = action.payload
      console.log("User-details",action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetail } = userSlice.actions

export default userSlice.reducer