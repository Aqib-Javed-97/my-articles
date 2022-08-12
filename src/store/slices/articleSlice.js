import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
  'articleSlice/getArticles',
  async(id, token) => {
    try {
      var x = await fetch(`https://article-app-node.herokuapp.com/api/article/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        }
      })
      const y = await x.json()
      console.log('----', y)
      return y
    } catch (error) {
      console.log(';;;', error)
      return error
    }
  }
);

const initialState = {
  loading: false,
  data: null
}

const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  extraReducers: {
    [getArticles.pending]: (state, action) => {
      console.log('pending', state, action)
      state.loading = true
    },
    [getArticles.fulfilled]: (state, action) => {
      console.log('fullfiled', state, action)
      state.data = action.payload.data
      state.loading = false
    },
    [getArticles.rejected]: (state, action) => {
      console.log('rejected', state, action)
      state.loading = false
    }
  }
})


export default articleSlice.reducer;