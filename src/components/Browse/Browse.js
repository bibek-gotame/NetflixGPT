import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'


function Browse() {

const user = useSelector((store)=> store.user)
const { uid,email,photoURL} = user
console.log(uid);
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
<img src={photoURL} alt='photoo'/>
    </>
  )
}

export default Browse
