<!-- * ------------------------------- OVERVIEW ---------------------------------------------------->

- Set up app by create-react-app.
- How useRef works , what it returns, when to use.
- Validated the forms using regex.
- Connected with firebase along authenticaiton with email/password.
- Set up redux to hold the data of sigIn/SignUp.
- useNavigate to navigate the path . used after certain condition or in function().

<!--*-------------------------------- Concepts and Codes------------------------------------------ -->
<!--! get know clearly about the authencation API's -->

<!--? -------------------------------Auth APIs-------------------------------------------------------->
- createUserWithEmailAndPassword : an api to create and account in firebase.
- signInWithEmailAndPassword : an api to verify either account existed.
- onAuthStateChanged : an api to watch changes i.e SignIn/SignUp or SignOut. It is used inside the useEffect to render only once after initial rendering. Then , dipatched action can be taken to update the store.{not forget to unsubscribe}

- signOut : an api to signOut calling to oASC
- updateProfile : an api to update the data of auth (used in cUWEP to update data only after sign up in this project)
- unsubscribing..........<!--! not know much more -->
-
- useNavigate : a hook used to navigate directly.(used in oASC for proper redirection )



<!--*--------------------------------- Better to Know ------------------------------------------- -->

- use Navigate hook inside the provider.
- creating constant file is good practice(to store hardCoded value)
