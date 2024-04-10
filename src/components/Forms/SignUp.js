import { useRef, useState,} from "react";
import Header from "../Header/Header";
import { checkValidate } from '../../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/store/userSlice'

const SignUp = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const [isSignIn, setIsSignIn] = useState(true)
  const [ermessage, setErmessage] = useState(null)
  const emaill = useRef(null) // useRef takes the reference from ref={} and returns and an object.
  const password = useRef(null)
  const name = useRef(null)

  const handleSubmit = () => {
    //Validate the Forms
    const message = checkValidate(emaill.current.value, password.current.value) // it returns either error message or null
    // ? useref => __.current.value to excess the value
    setErmessage(message)

    if (message) return;  //returns if message exist which implies an error no futher code will not be executed

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emaill.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://images.unsplash.com/photo-1712415341931-96aff76a42e9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = user
            dispatch(addUser({ uid: uid, emaill: email, displayName: displayName, photoURL: photoURL }))
            Navigate('/browse');
          }).catch((error) => {
            setErmessage('error')
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErmessage(errorCode + errorMessage)
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emaill.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          Navigate('/browse');
          console.log('sign-running');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErmessage(errorCode + errorMessage)
        });
    }
  }
  return (
    <>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/bea608a8-2fe7-4605-8b60-f3a48ae50720/NP-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-imagee"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute flex flex-col gap-3 w-[23rem] py-10 px-6 rounded-lg bg-black top-32 left-[40%] text-white bg-opacity-85">
        <h2 className="font-extrabold text-2xl my-2" >{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {!isSignIn && <input ref={name} type='text' placeholder='Enter your Full Name' className="w-full p-4  rounded-md bg-gray-800" />
        }
        <input ref={emaill} type='email' placeholder='Enter your email' className="w-full p-4  rounded-md bg-gray-800" />
        <input ref={password} type='password' placeholder='Enter your password' className="w-full p-4   rounded-md bg-gray-800" />
        <p className="text-red-500 font-bold">        {ermessage}
        </p>
        <button onClick={handleSubmit} className="w-full p-4   rounded-md bg-red-600 font-bold">{isSignIn ? 'Sign in' : 'Sign Up'}</button>
        <p className='px-2 py-2  cursor-pointer' onClick={() => {
          setIsSignIn(!isSignIn)
        }}>
          {isSignIn ? 'New to Netflix ? Sign Up Now' : 'Already registered ? Sign In Now'}</p>
      </form>
    </>
  );
};
export default SignUp;
