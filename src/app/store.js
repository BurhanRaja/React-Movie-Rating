import { configureStore } from "@reduxjs/toolkit";
import popularAllSlice from "../features/movie&tv/popularAll"
import topRatedAllSlice from "../features/movie&tv/topRatedAll"

const store = configureStore({
    reducer:{
        popularMovies: popularAllSlice,
        popularTVShows: popularAllSlice,

        topRatedMovies: topRatedAllSlice,
        topRatedTVShows: topRatedAllSlice
    }
})

export default store