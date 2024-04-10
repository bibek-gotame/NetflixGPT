import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name : 'movies',
    initialState : {
        nowPLayingMovies: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPLayingMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies} = movieSlice.actions
export default movieSlice.reducer
