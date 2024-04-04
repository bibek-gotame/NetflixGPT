import { useState } from "react";
import Header from "../Header/Header";

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true)
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
      <form className="absolute w-[23rem] py-10 px-6 rounded-lg bg-black top-36 left-[40%] text-white bg-opacity-85">
        <h2 className="font-extrabold text-2xl my-2" >{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
{ !isSignIn  && <input type='text' placeholder='Enter your Full Name' className="w-full p-4 my-3 rounded-md bg-gray-800" />
}
        <input type='email' placeholder='Enter your email' className="w-full p-4 my-3 rounded-md bg-gray-800" />
        <input type='password' placeholder='Enter your password' className="w-full p-4 my-3  rounded-md bg-gray-800" />
        <button className="w-full p-4  my-4 rounded-md bg-red-600 font-bold">{isSignIn ? 'Sign in' : 'Sign Up'}</button>
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
