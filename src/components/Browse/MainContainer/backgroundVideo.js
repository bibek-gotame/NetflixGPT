import { useSelector } from 'react-redux'
import { useMovieTrailer } from '../../../Hooks/useMovieTrailer'

function BackgroundVideo({ movie_id }) {

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer)
  useMovieTrailer(movie_id);
  return (
    <div className=' mt-[4.5rem] xl:mt-[-6.3rem]  ' >
      <iframe
        className='w-screen aspect-video  '
        src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?&autoplay=1&mute=1"} title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

    </div>
  )
}

export default BackgroundVideo