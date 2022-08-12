import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './slices/articleSlice'
//import themeSlice from './slices/theme'

import userSlice from './slices/user'

export default configureStore({
  reducer: {
    user: userSlice,
    //theme: themeSlice
    article: articleSlice
  },
})