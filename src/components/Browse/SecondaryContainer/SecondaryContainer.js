import MovieCards from './MovieCards'

import {useSelector} from 'react-redux'
function SecondaryContainer() {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies)
  const PopularMovies = useSelector(store => store.movies?.popularMovies)
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies)
  const upComingMovies = useSelector(store => store.movies?.upComingMovies)

  return (
    <>
    <div className=' bg-black '>
      <div className='mt-[-15rem]'>

      
      <MovieCards title={'Now Playing Movies'} movies={nowPlayingMovies}/>
      <MovieCards title={'Popular Movies'} movies={PopularMovies}/>
      <MovieCards title={'Top Rated Movies'} movies={topRatedMovies}/>
      <MovieCards title={'Upcoming Movies'} movies={upComingMovies}/>
      </div>
      
      {/* <MovieCards/>
      <MovieCards/>
      <MovieCards/> */}

    </div>

      {/* moiveList
        - nowplayin
        - Popular
        - trending
          - MoiveCards *n */}
    </>
  )
}

export default SecondaryContainer