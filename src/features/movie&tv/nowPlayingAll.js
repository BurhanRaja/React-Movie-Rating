import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchNowPlayingMovies = createAsyncThunk('nowPlayingMovies/fetchNowPlayingMovies', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "movie/now_playing"
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1&region=IN&language=en`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData;
})

export const fetchNowPlayingTVShows = createAsyncThunk('nowPlayingTVShows/fetchNowPlayingTVShows', 
async () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "tv/on_the_air"
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData;
})


const initialState = {
    nowPlayingMovies: {},
    nowPlayingTVShows: {}
}

const nowPlayingAllSlice = createSlice({
    name: "Now Playing Movie and TV Shows",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNowPlayingMovies.fulfilled]: (state, {payload}) => {
            console.log("Now Playing Movies Fulfilled")
            return {...state, nowPlayingMovies: payload}
        },
        [fetchNowPlayingTVShows.fulfilled]: (state, {payload}) => {
            console.log("Now Playing TV Shows Fulfilled")
            return {...state, nowPlayingTVShows: payload}
        },
    }
})

export default nowPlayingAllSlice.reducer