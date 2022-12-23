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
export const fetchMovieDetailById = createAsyncThunk(
  'users/fetchMovieDetailById',
  async (movieId, thunkAPI) => {
    const response = await MovieService.getMovieDetail({ movieId: movieId.id })
    return response.data
  }
)
//search movie
export const fetchSearchMovie = createAsyncThunk(
  'users/fetchMovieDetailById',
  async (query, thunkAPI) => {
    const response = await MovieService.getSearchMovie(query)
    return response.data
  }
)
const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieTopRated: [],
    moviePopular: [],
    item: [],
    seen:[],
    search:[]
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const {id} = action.payload
      const item = state.item.find(item => item === id)
      if (item) {
        state.item = state.item.filter(item => item !== id)
      } else {
        state.item = [...new Set([id, ...state.item])]
      }
      return state
    },
    toggleSeen: (state, action) => {
      const {id} = action.payload 
      const seen = state.seen.find(item => item === id)
      if (seen) {
        state.seen = state.seen.filter(item => item !== id)
      } else {
        state.seen = [...new Set([id, ...state.seen])]
      }
      return state
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchMovieTopRated.fulfilled, (state, action) => {
        return {
          ...state,
          movieTopRated: action.payload
        }
      })

      .addCase(fetchMoviePopular.fulfilled, (state, action) => {
        return {
          ...state,
          moviePopular: action.payload
        }
      })

      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        return {
          ...state,
          search: action.payload
        }
      })


  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorite,toggleSeen } = movieSlice.actions

export default movieSlice.reducer