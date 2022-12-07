import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState:{
    item:[]
  },
  reducers: {
    toggleMovie: (state,action) => {
        console.log('action',action)
        return state
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleMovie } = movieSlice.actions

export default movieSlice.reducer