import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/userSlice'
const store = configureStore({
    reducer: {
        userr: userReducer
    },
})
export default store