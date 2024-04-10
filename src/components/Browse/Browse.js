import { useSelector,useDispatch } from 'react-redux'
import Header from '../Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'
import { API_OPTIONS, nowPLayingUrl } from '../../utils/constant'
import { addNowPlayingMovies } from '../../utils/store/movieSlice'
import { useEffect } from 'react'


function Browse() {
const dispatch = useDispatch()

const NowPlaying = async()=>{
  const data = await fetch(nowPLayingUrl,API_OPTIONS)
  const json = await data.json()
  console.log(json);
  dispatch(addNowPlayingMovies(json.results))
}
useEffect(()=>{
  NowPlaying()
},[])

// const user = useSelector((store)=> store.user)
// const navigate = useNavigate()
// console.log(user.displayName);

// if(!user) {
//   navigate('/')
// }
//  else

  return (
    <>
    <Header/>
    {/* {photoURL} */}
    {/* {user.displayName} */}
    </>
  )
}

export default Browse
