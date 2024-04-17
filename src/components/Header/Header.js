import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/store/userSlice";
import { LOGO } from "../../utils/constant";
import { toggleGptSearch } from "../../utils/store/gptSlice";

function Header() {
  const user = useSelector((store) => store.user)
  const toggleGptSearchStatus = useSelector((store) => store.gpt?.toggleGptSearchStatus)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {   //? what unsubscribing and why it is done ?
    const unsubscribe =
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, [])

  const SignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleGptSearchStatus = ()=>{
    dispatch(toggleGptSearch())
  }
  return (
    <>
      <div className="absolute z-50 w-full px-2 sm:px-8 py-2 bg-black bg-opacity-30  flex flex-row gap-2 justify-between">

        <div className="w-2/3 pt-3 " >
          <img src={LOGO}
            alt='logo' className="w-44" />
        </div>
        {user && <div className="flex flex-col vsm:flex-row gap-2 items-center">
          {/* <p className="text-2xl font-bold text-white">{user.displayName}</p>
          <div className='w-[5rem] h-[5rem]  rounded-[50%] overflow-hidden' ><img src={user.photoURL} alt='photoo' className=' ' /></div>*/}
          <button  
          onClick={handleGptSearchStatus}
          className="    rounded-lg font-bold  py-2 text-white bg-green-600 w-24">{toggleGptSearchStatus? "Home":"Gpt Search"}</button>
          <button
            onClick={SignOut}
            className=" rounded-lg font-bold  py-2 w-24 text-white bg-red-600">Sign Out</button>
        </div>}
      </div>
    </>
  )
}

export default Header