import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/userSlice'
import moviesReducer from './movieSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
})
export default store