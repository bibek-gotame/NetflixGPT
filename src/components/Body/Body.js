import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from '../Forms/SignUp'
import Browse from '../Browse/Browse'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/store/userSlice'
function Body() {
  // const [c,setc]=useState(0)
  const dispatch = useDispatch()
  // const count = ()=>{
  //   setc((c)=> c+1)
  //   console.log(c);
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  useEffect(() => {    //! im not getting this one
    // count();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        // console.log(displayName);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL : photoURL}))
      } else {
        // User is signed out
        dispatch(removeUser())

        // ...
      }
    });
  }, [])
  return (
    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default Body