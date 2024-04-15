import { useEffect } from "react"
import { API_OPTIONS, nowPlayingUrl } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/store/movieSlice"
import { useDispatch, useSelector } from 'react-redux'

export const useNowPlaying = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

    useEffect(() => {
        !nowPlayingMovies &&  NowPlaying()
    }, [])

    const NowPlaying = async () => {
        const data = await fetch(nowPlayingUrl, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

}
