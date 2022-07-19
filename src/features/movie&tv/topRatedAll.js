import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopRatedMovies = createAsyncThunk('topRatedMovies/fetchTopRatedMovies', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "movie/top_rated"
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1&region=IN`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    return jsonData;
})

export const fetchTopRatedTVShows = createAsyncThunk('topRatedTVShows/fetchTopRatedMovies', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "tv/top_rated"
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
    topRatedMovies: {},
    topRatedTVShows: {}
}

const TopRatedAllSlice = createSlice({
    name: "Top Rated Movie and TV Show",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTopRatedMovies.fulfilled]: (state, {payload}) => {
            console.log("Popular Movies Fulfilled")
            return {...state, topRatedMovies: payload}
        },
        [fetchTopRatedTVShows.fulfilled]: (state, {payload}) => {
            console.log("Popular TV Shows Fulfilled")
            return {...state, topRatedTVShows: payload}
        },
    }
})

export default TopRatedAllSlice.reducer