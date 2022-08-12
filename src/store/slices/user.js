import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
        //save token into localstorage
      localStorage.setItem('token', action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions

export default userSlice.reducer