import { useNowPlaying } from '../../Hooks/useNowPlaying'
import Header from '../Header/Header'

function Browse() {
useNowPlaying()
  return (
    <>
    <Header/>
    </>
  )
}
export default Browse
