import { useEffect } from "react"
import { API_OPTIONS, topRatedMoviesURL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/store/movieSlice"

export const useTopRatedMovies = () => {
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

const dispatch = useDispatch()
    const getTopRatedMovies = async()=>{

const data = await fetch( topRatedMoviesURL,API_OPTIONS)
const json = await data.json()
dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        !topRatedMovies &&  getTopRatedMovies()
    },[])

}