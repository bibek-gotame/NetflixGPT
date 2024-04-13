import { useNowPlaying } from '../../Hooks/useNowPlaying'
import { usePopularMovies } from '../../Hooks/usePopularMovies';
import Header from '../Header/Header'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'
import { useUpComingMovies } from '../../Hooks/useUpComingMovies ';
import { useTopRatedMovies } from '../../Hooks/useTopRatedMovies ';
import { useSelector } from 'react-redux';
import GptSearch from '../GPT_Search/GptSearch';

function Browse() {
  const toggleGptSearchStatus = useSelector((store) => store.gpt?.toggleGptSearchStatus)

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <>
      <div className=' w-full  overflow-x-hidden'>
        <Header />
        {toggleGptSearchStatus ? <GptSearch /> : <>
          <MainContainer />
          <SecondaryContainer /></>}
      </div>
    </>
  )
}
export default Browse
