import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../../utils/constant'
import { useDispatch ,useSelector} from 'react-redux'
import { addMovieTrailer } from '../../../utils/store/movieSlice'
function BackgroundVideo({ movie_id }) {

  const dispatch = useDispatch()
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer)

  const getTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS)
    const json = await data.json()
    const filterTrailer = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterTrailer[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer))
  }

  useEffect(() => {
    getTrailer()
  }, [])

  return (
    <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/" + movieTrailer?.key} title="YouTube video player" ></iframe></div>
  )
}

export default BackgroundVideo