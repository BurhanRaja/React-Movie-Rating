import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPopularMovies = createAsyncThunk('popularMovies/fetchPopularMovies', 
    
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "movie/popular"

    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });

    const jsonData = await response.json()
    return jsonData;
})


const initialState = {
    popularMovies: {}
}

const popularMovieSlice = createSlice({
    name: "Popular Movie",
    initialState,
    reducers: {
        addPopularMovies: (state, { payload }) => {
            state.popularMovies = payload
        }
    },
    extraReducers: {
        [fetchPopularMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchPopularMovies.fulfilled]: (state, {payload}) => {
            console.log("Fulfilled")
            return {...state, popularMovies: payload}
        },
        [fetchPopularMovies.rejected]: () => {
            console.log("Rejected")
        },
    }
})

export const { addPopularMovies } = popularMovieSlice.actions
export default popularMovieSlice.reducer