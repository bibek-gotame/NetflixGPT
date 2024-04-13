import { useEffect } from "react"
import { API_OPTIONS, upComingMoviesURL } from "../utils/constant"
import { useDispatch } from "react-redux"
import {  addUpComingMovies } from "../utils/store/movieSlice"

export const useUpComingMovies = ()=>{
const dispatch = useDispatch()
    const getUpComingMovies = async()=>{

const data = await fetch( upComingMoviesURL,API_OPTIONS)
const json = await data.json()
dispatch(addUpComingMovies(json.results))
    }
    useEffect(()=>{
        getUpComingMovies()
    },[])

}