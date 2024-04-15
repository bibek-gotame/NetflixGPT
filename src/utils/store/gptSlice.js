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
        // addGptSearchMoviesName: (state,action)=>{
        //     state.gptSearchMoviesName = action.payload

        // },
        addGptSearchMovies: (state,action)=>{
            const {gptMoviesName,gptMovies}=action.payload
            state.gptSearchMovies = gptMovies
            state.gptSearchMoviesName = gptMoviesName

        }
    }
})

export const { toggleGptSearch,addGptSearchMovies} = gptSlice.actions
export default gptSlice.reducer