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

export const fetchPopularTVShows = createAsyncThunk('popularTVShows/fetchPopularTVShows', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "tv/popular"
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
    popularMovies: {},
    popularTVShows: {}
}

const popularAllSlice = createSlice({
    name: "Popular Movie",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPopularMovies.fulfilled]: (state, {payload}) => {
            console.log("Popular Movies Fulfilled")
            return {...state, popularMovies: payload}
        },
        [fetchPopularTVShows.fulfilled]: (state, {payload}) => {
            console.log("Popular TV Shows Fulfilled")
            return {...state, popularTVShows: payload}
        },
    }
})

export default popularAllSlice.reducer