import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieService from '../../services/movie';


export const fetchMovieTopRated = createAsyncThunk(
  'users/fetchMovieTopRated',
  async (data, thunkAPI) => {
    const response = await MovieService.getMovie()
    return response.data
  }
)
export const fetchMoviePopular = createAsyncThunk(
  'users/fetchMoviePopular',
  async (data, thunkAPI) => {
    const response = await MovieService.getMoviePopular()
    return response.data
  }
)
// export const fetchMovieDetailById = createAsyncThunk(
//   'users/fetchMovieDetailById',
//   async (movieId,thunkAPI) => {
//     console.log("id", movieId)
//     // const response = await MovieService.getMovieDetail(movieId.id)
//     // console.log(response.data)
//     // return response.data
//   }
// )

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieTopRated: [],
    moviePopular: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchMovieTopRated.fulfilled, (state, action) => {
        state.movieTopRated = action.payload
      })

      .addCase(fetchMoviePopular.fulfilled, (state, action) => {
        state.moviePopular = action.payload
      })


  },
})

// Action creators are generated for each case reducer function
export const { } = movieSlice.actions

export default movieSlice.reducer