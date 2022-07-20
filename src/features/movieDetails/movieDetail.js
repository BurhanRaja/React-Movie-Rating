import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get Detail
export const fetchMovieDetail = createAsyncThunk('movieDetail/fetchMovieDetail', 
async (id) => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = `movie/${id}`
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&language=en-US`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData;
})

// Get Credits
export const fetchMovieCredits = createAsyncThunk('movieCredits/fetchMovieCredits', 
async (id) => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = `movie/${id}/credits`
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&language=en-US`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData;
})

// Get Recommendations
export const fetchMovieRecommend = createAsyncThunk('movieRecommend/fetchMovieRecommend', 
async (id) => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = `movie/${id}/recommendations`
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1&language=en-US`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData;
})

// Get Reviews
export const fetchMovieReview = createAsyncThunk('movieReview/fetchMovieReview', 
async (id) => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = `movie/${id}/reviews`
    const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1&language=en-US`, {
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
    movieDetail: {},
    movieCredits: {},
    movieRecommend: {},
    movieReview: {},
}

const movieDetailAllSlice = createSlice({
    name: "Now Playing Movie and TV Shows",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovieDetail.fulfilled]: (state, {payload}) => {
            console.log("Now Playing Movies Fulfilled")
            return {...state, movieDetail: payload}
        },
        [fetchMovieCredits.fulfilled]: (state, {payload}) => {
            console.log("Now Playing TV Shows Fulfilled")
            return {...state, movieCredits: payload}
        },
        [fetchMovieRecommend.fulfilled]: (state, {payload}) => {
            console.log("Now Playing TV Shows Fulfilled")
            return {...state, movieRecommend: payload}
        },
        [fetchMovieReview.fulfilled]: (state, {payload}) => {
            console.log("Now Playing TV Shows Fulfilled")
            return {...state, movieReview: payload}
        },
    }
})

export default movieDetailAllSlice.reducer