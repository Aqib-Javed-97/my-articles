import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
      background: '#fff',
  },
  reducers: {
    setBackground: (state, action) => {
        state.background = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBackground } = themeSlice.actions

export default themeSlice.reducer