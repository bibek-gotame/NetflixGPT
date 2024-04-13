import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        toggleGptSearchStatus:false,
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.toggleGptSearchStatus = !state.toggleGptSearchStatus
        }
    }
})

export const { toggleGptSearch} = gptSlice.actions
export default gptSlice.reducer