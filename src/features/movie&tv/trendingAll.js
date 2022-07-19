import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrendingMovies = createAsyncThunk('trendingMovies/fetchTrendingMovies', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "trending/movie/week"
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    return jsonData;
})

export const fetchTrendingTVShows = createAsyncThunk('trendingTVShows/fetchTrendingTVShows', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "trending/tv/week"
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
    trendingMovies: {},
    trendingTVShows: {}
}

const TrendingAllSlice = createSlice({
    name: "Top Rated Movie and TV Show",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTrendingMovies.fulfilled]: (state, {payload}) => {
            console.log("Popular Movies Fulfilled")
            return {...state, trendingMovies: payload}
        },
        [fetchTrendingTVShows.fulfilled]: (state, {payload}) => {
            console.log("Popular TV Shows Fulfilled")
            return {...state, trendingTVShows: payload}
        },
    }
})

export default TrendingAllSlice.reducer