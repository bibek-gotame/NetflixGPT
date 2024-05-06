import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/userSlice'
import moviesReducer from './movieSlice'
import gptSearchReducer from './gptSlice'
import watchSlice from "./watchSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt:gptSearchReducer,
        watch:watchSlice,
    },
})
export default store