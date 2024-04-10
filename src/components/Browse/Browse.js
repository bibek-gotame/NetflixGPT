import { useNowPlaying } from '../../Hooks/useNowPlaying'
import Header from '../Header/Header'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'

function Browse() {
useNowPlaying()
  return (
    <>
    <div className='h-screen w-full bg-slate-400'>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
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
