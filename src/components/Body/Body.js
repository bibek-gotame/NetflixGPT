import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from '../Forms/SignUp'
import Browse from '../Browse/Browse'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/store/userSlice'
function Body() {
  const dispatch = useDispatch()
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // console.log(user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
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