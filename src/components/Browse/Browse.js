import Header from '../Header/Header'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'
import GptSearch from '../GPT_Search/GptSearch';

import { useSelector } from 'react-redux';
import { usePopularMovies } from '../../Hooks/usePopularMovies';
import { useNowPlaying } from '../../Hooks/useNowPlaying'
import { useUpComingMovies } from '../../Hooks/useUpComingMovies ';
import { useTopRatedMovies } from '../../Hooks/useTopRatedMovies ';

function Browse() {
  const toggleGptSearchStatus = useSelector((store) => store.gpt?.toggleGptSearchStatus)
  const user = useSelector(store => store.user)
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  if (!user && !upComingMovies && !trailerVideo) return (<>
    <Header />
    <p>Loading</p></>)
  else return (
    <>
      <div className=' w-full  overflow-x-hidden'>
        <Header />
        {toggleGptSearchStatus ? (<GptSearch />) : (<><MainContainer /><SecondaryContainer /></>)}
      </div>
    </>
  )
}
export default Browse
