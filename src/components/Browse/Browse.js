import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'
import { API_OPTIONS, nowPLayingUrl } from '../../utils/constant'


function Browse() {
const NowPlaying = async()=>{
  const data = await fetch(nowPLayingUrl,API_OPTIONS)
  const json = await data.json()
  console.log(json);
}

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
