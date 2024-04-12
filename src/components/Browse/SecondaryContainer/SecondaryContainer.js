import MovieCards from './MovieCards'

import {useSelector} from 'react-redux'
function SecondaryContainer() {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies)
    // console.log(nowPlayingMovies)

  return (
    <>
    <div className='mt-[-17rem] '>
      <MovieCards title={'Now Playing Movies'} movies={nowPlayingMovies}/>
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