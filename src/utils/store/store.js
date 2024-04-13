import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/userSlice'
import moviesReducer from './movieSlice'
import gptSearchReducer from './gptSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt:gptSearchReducer
    },
})
export default store