import { useNowPlaying } from '../../Hooks/useNowPlaying'
import { usePopularMovies } from '../../Hooks/usePopularMovies';
import Header from '../Header/Header'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'
import { useUpComingMovies } from '../../Hooks/useUpComingMovies ';
import { useTopRatedMovies } from '../../Hooks/useTopRatedMovies ';

function Browse() {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <>
      <div className=' w-full bg-black overflow-x-hidden'>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
      {/* Maincontainer
      - Title
      - bgVdo
    Secondary Container
      - Listings movies
        - cards */}
    </>
  )
}
export default Browse
