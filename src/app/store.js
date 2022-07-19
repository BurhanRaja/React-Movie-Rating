import { configureStore } from "@reduxjs/toolkit";
import popularAllSlice from "../features/movies/popularAll"

const store = configureStore({
    reducer:{
        popularMovies: popularAllSlice,
        popularTVShows: popularAllSlice
    }
})

export default store