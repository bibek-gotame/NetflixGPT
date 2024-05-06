import { createSlice } from "@reduxjs/toolkit";


const watchSlice  = createSlice({
name:'watch',
initialState:{
    watchingMovie:null,

},
reducers:{
    addWatchingMovies:(state,action)=>{
        state.watchingMovie = action.payload
    }
}
})

export const {addWatchingMovies} = watchSlice.actions
export default watchSlice.reducer