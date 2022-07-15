import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularMovies:{}
}

const popularMovieSlice = createSlice({
    name:"Popular Movie",
    initialState,
    reducers:{
        addPopularMovies: (state, {payload}) => {
            state.popularMovies = payload
        }
    }
})

export const {addPopularMovies} = popularMovieSlice.actions
export const getPopularMovies = (state) => state.popularMovies.popularMovies
export default popularMovieSlice.reducer