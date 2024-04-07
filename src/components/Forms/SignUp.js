import { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidate } from '../../utils/validate'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [ermessage, setErmessage] = useState(null)
  const email = useRef(null) // useRef takes the reference from ref={} and returns and an object.
  const password = useRef(null)
  // const name = useRef(null)

  const handleSubmit = () => {
    //Validate the Forms
    const message = checkValidate(email.current.value, password.current.value) // it returns either error message or null
    // ? useref.current.value to excess the value
    setErmessage(message)

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          setErmessage(errorCode + errorMessage)
          // ..
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          setErmessage(errorCode + errorMessage)
        });
    }


  }
  return (

    <>
      {/* <div className="relative"> */}
      <Header />

      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/bea608a8-2fe7-4605-8b60-f3a48ae50720/NP-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-imagee"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute flex flex-col gap-3 w-[23rem] py-10 px-6 rounded-lg bg-black top-32 left-[40%] text-white bg-opacity-85">
        <h2 className="font-extrabold text-2xl my-2" >{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {!isSignIn && <input type='text' placeholder='Enter your Full Name' className="w-full p-4  rounded-md bg-gray-800" />
        }
        <input ref={email} type='email' placeholder='Enter your email' className="w-full p-4  rounded-md bg-gray-800" />
        <input ref={password} type='password' placeholder='Enter your password' className="w-full p-4   rounded-md bg-gray-800" />
        <p className="text-red-500 font-bold">        {ermessage}
        </p>
        <button onClick={handleSubmit} className="w-full p-4   rounded-md bg-red-600 font-bold">{isSignIn ? 'Sign in' : 'Sign Up'}</button>
        <p className='px-2 py-2  cursor-pointer' onClick={() => {
          setIsSignIn(!isSignIn)
        }}>
          {isSignIn ? 'New to Netflix ? Sign Up Now' : 'Already registered ? Sign In Now'}</p>


      </form>
      {/* </div> */}
    </>
  );
};

export default SignUp;
