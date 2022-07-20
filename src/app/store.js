import { configureStore } from "@reduxjs/toolkit";
import popularAllSlice from "../features/movie&tv/popularAll"
import topRatedAllSlice from "../features/movie&tv/topRatedAll"
import trendingAllSlice from "../features/movie&tv/trendingAll"
import nowPlayingAllSlice from "../features/movie&tv/nowPlayingAll"
import movieDetailAllSlice from "../features/movieDetails/movieDetail"

const store = configureStore({
    reducer:{
        popularMovieAndTV: popularAllSlice,

        topRatedMovieAndTV: topRatedAllSlice,

        trendingMovieAndTV: trendingAllSlice,

        nowPlayingMovieAndTV: nowPlayingAllSlice,

        movieDetails: movieDetailAllSlice,

        
    }
})

export default store