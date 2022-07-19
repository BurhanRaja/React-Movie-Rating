import { configureStore } from "@reduxjs/toolkit";
import popularAllSlice from "../features/movie&tv/popularAll"
import topRatedAllSlice from "../features/movie&tv/topRatedAll"
import trendingAllSlice from "../features/movie&tv/trendingAll"

const store = configureStore({
    reducer:{
        popularMovieAndTV: popularAllSlice,

        topRatedMovieAndTV: topRatedAllSlice,

        trendingMovieAndTV: trendingAllSlice,
    }
})

export default store