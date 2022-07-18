import { configureStore } from "@reduxjs/toolkit";
import popularMovieReducer from "../features/movies/popularAll"

const store = configureStore({
    reducer:{
        popularMovies: popularMovieReducer
    }
})

export default store