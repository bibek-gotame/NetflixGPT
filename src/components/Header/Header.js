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

  const handleGptSearchStatus = () => {
    dispatch(toggleGptSearch())
  }
  return (
    <>

      <div className={` ${toggleGptSearchStatus ? '  bg-opacity-30 ' : 'xl:bg-transparent '}   bg-black absolute z-50 w-full px-2 sm:px-8 py-3  flex flex-row gap-2 justify-between  `}>
        {/* {toggleGptSearchStatus && ' bg-opacity-30 '}  */}
        <div className=" flex items-center " >
          <img src={LOGO}
            alt='logo' className="w-44 " />
        </div>
        {user && <div className=" flex p-0 flex-col vsm:flex-row   gap-2 items-center">
          <button
            onClick={handleGptSearchStatus}
            className="    rounded-lg font-bold py-1 sm:py-2   text-white bg-green-600 w-24 px-1">{toggleGptSearchStatus ? "Home" : "Gpt Search"}</button>
          <button
            onClick={SignOut}
            className=" rounded-lg font-bold  py-1  sm:py-2 w-24   px-1 text-white bg-red-600">Sign Out</button>
        </div>}
      </div>
    </>
  )
}

export default Header