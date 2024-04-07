import { useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
function Header() {
  const user = useSelector((store) => store.user)

  const SignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
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
          <p className="font-bold text-xl">LOGO</p>
          <button
  onClick={SignOut}
           className="border-2 border-black rounded-lg font-bold px-4 py-2 text-white bg-red-600">Sign Out</button>
        </div>}
      </div>
    </>
  )
}

export default Header