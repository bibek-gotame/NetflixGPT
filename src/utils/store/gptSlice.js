import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        toggleGptSearchStatus:false,
        gptSearchMoviesName:null  ,
        gptSearchMovies:null,
        
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.toggleGptSearchStatus = !state.toggleGptSearchStatus
        },
        addGptSearchMoviesName: (state,action)=>{
            state.gptSearchMovies = action.payload
        },
        addGptSearchMovies: (state,action)=>{
            state.gptSearchMovies = action.payload
        }
    }
})

export const { toggleGptSearch,addGptSearchMovies,addGptSearchMoviesName} = gptSlice.actions
export default gptSlice.reducer