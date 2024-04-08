import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import {  useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/store/userSlice";

function Header() {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch  = useDispatch()

  useEffect(() => {    //! im not getting this one
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL : photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
  }, [])

  const SignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">

        <div className="w-44 mx-auto md:mx-0" >
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt='logo' className="w-44" />
        </div>

        {user && <div className=" flex gap-2 items-center">
          <p className="text-2xl font-bold">{user.displayName}</p>
          <img src={user.photoURL} alt='photoo' className='w-[10rem]' />
          <button
            onClick={SignOut}
            className="border-2 border-black rounded-lg font-bold px-4 py-2 text-white bg-red-600">Sign Out</button>
        </div>}
      </div>
    </>
  )
}

export default Header