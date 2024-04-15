import { useEffect } from "react"
import { API_OPTIONS, popularMoviesURL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/store/movieSlice"

export const usePopularMovies = ()=>{
const dispatch = useDispatch()
const popularMovies = useSelector((store) => store.movies?.popularMovies);

    const getPopularMovies = async()=>{

const data = await fetch( popularMoviesURL,API_OPTIONS)
const json = await data.json()
dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        !popularMovies &&  getPopularMovies()
    },[])

}