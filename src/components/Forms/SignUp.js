import { useRef, useState, } from "react";
import Header from "../Header/Header";
import { checkValidate } from '../../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser } from '../../utils/store/userSlice'
import { backGroundImageURL } from "../../utils/constant";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch()
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
            displayName: name.current.value, photoURL:
              "https://images.unsplash.com/photo-1474658850099-527c4b3cf565?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = user
            dispatch(addUser({ uid: uid, emaill: email, displayName: displayName, photoURL: photoURL }))
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErmessage(errorCode + errorMessage)
        });
    }
  }
  return (
    <div >
      <Header />
      <div className="absolute w-screen h-screen opacity-50 z-10 bg-black "></div>
      <div className=" absolute ">
        <img
        className=" w-screen h-screen object-cover"
          src={backGroundImageURL}
          alt="background-imagee"
        />
      </div>
     <div className="mx-2">
     <form onSubmit={(e) => e.preventDefault()} className="relative shadow-red-600  shadow-xl  z-20  mx-auto flex flex-col gap-3 w-ful max-w-[23rem] py-10 px-6 rounded-lg bg-black top-[20vh]  text-white bg-opacity-85">

<h2 className="font-extrabold text-2xl my-2" >{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
{!isSignIn && <input ref={name} type='text' placeholder='Enter your Full Name' className="w-full p-4  rounded-md bg-gray-800" />}

<input ref={emaill} type='email' placeholder='Enter your email' className="w-full p-4  rounded-md bg-gray-800" />
<input ref={password} type='password' placeholder='Enter your password' className="w-full p-4   rounded-md bg-gray-800" />
<p className="text-red-500 font-bold">{ermessage}</p>

<button onClick={handleSubmit} className="w-full p-4   rounded-md bg-red-600 font-bold">{isSignIn ? 'Sign in' : 'Sign Up'}
</button>

<p className='px-2 py-2  cursor-pointer hover:underline' onClick={() => {
  setIsSignIn(!isSignIn)
}}>
  {isSignIn ? 'New to Netflix ? Sign Up Now' : 'Already registered ? Sign In Now'}
</p>
</form>
     </div>
    </div>
  );
};

export default SignUp;
