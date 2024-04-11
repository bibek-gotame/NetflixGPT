
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { addMovieTrailer } from "../utils/store/movieSlice"
import { useDispatch, useSelector } from 'react-redux'

export const useMovieTrailer = (movie_id) => {
  console.log(movie_id + 'hookout');
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getTrailer = async () => {
    console.log(movie_id + 'hookin');
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US?rel=0`, API_OPTIONS)
    const json = await data.json()
    const filterTrailer = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterTrailer ? filterTrailer[0] : json.results[0]
    dispatch(addMovieTrailer(trailer))
  }

  useEffect(() => {
    // !trailerVideo && 
    getTrailer() // useeffect run on every render with which api being called in every rendering so to avoid, we checked is trailer already existed , no api will be called
  }, [movie_id])

}