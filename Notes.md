<!-- * ------------------------------- OVERVIEW ---------------------------------------------------->

- Set up app by create-react-app.
- How useRef works , what it returns{object}, when to use.
- Validated the forms using regex.
- Connected with firebase along authenticaiton with email/password.
- Set up redux to hold the data of sigIn/SignUp.
- useNavigate to navigate the path . used after certain condition or in function().
- fetched nowplaying data from TMDB using custom hook
- created .env file to protect the confedential data to of public.

<!--*-------------------------------- Concepts and Codes------------------------------------------ -->
<!--! ---------------------- get know clearly about the authencation API's _!!----------------------->

<!--? -------------------------------Auth APIs-------------------------------------------------------->

- createUserWithEmailAndPassword : an api to create and account in firebase.
- signInWithEmailAndPassword : an api to verify either account existed.
- onAuthStateChanged : an api to watch changes i.e SignIn/SignUp or SignOut. It is used inside the useEffect to render only once after initial rendering. Then , dipatched action can be taken to update the store.{ not forget to unsubscribe }

- signOut : an api to signOut calling to oASC API
- updateProfile : an api to update the data of auth (used in cUWEP to update data only after sign up in this project)
- unsubscribing..........<!--! not know much more -->
-
- useNavigate : a hook used to navigate directly.(used in oASC for proper redirection )
-
- 

<!--*--------------------------------- Better to Know ------------------------------------------- -->

- use Navigate hook inside the provider.
- use Navigate hook inside the useEffect
- creating constant file is good practice(to store hardCoded value)
- create custom hook to make code smaller and readable
- hooks should be call at top level, not inside the nested functions ,useEffect, not of any .

<!-- *------------------------------mistakes and thier solutions.---------------------------------- -->

-     when i refresh the page the user store gets empty and the browse component is re-rendered . As the user store is empty , browse compoenent does not rendered due to conditonal rendering i.e the home page. which containers header that has onAuthState change. so when the page is refreshed , user store gets empty , that effect the rendering condition and does not allow header to render which has onAuthStateChange API so it is also not called. when this api does not get called user store does not gets update and we see a loading page deu to conditional rendering.
: so i put the header to loading page also so that header gets re-render and onAuthStateChange API get called.


-


