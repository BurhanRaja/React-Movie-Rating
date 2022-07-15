import { configureStore } from "@reduxjs/toolkit";
import popularMovieReducer from "../features/movies/popularMovie"

const store = configureStore({
    reducer:{
        popularMovies: popularMovieReducer
    }
})

export default store