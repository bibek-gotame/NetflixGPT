<!-- * ------------------------------- OVERVIEW ---------------------------------------------------->

- Set up app by create-react-app.
- How useRef works , what it returns, when to use.
- Validated the forms using regex.
- Connected with firebase along authenticaiton with email/password.
- Set up redux to hold the data of sigIn/SignUp.
- useNavigate to navigate the path . used after certain condition or in function().

<!--*-------------------------------- Concepts and Codes------------------------------------------ -->

- createUserWithEmailAndPassword : an api to create and account in firebase.
- signInWithEmailAndPassword : an api to verify either account existed.
- onAuthStateChanged : an api to watch changes i.e SignIn/SignUp or SignOut. It is used inside the useEffect to render only once after initial rendering. Then , dipatched action can be taken to update the store.

- useNavigate : a hook used to navigate directly.
-

<!--*--------------------------------- Better to Know ------------------------------------------- -->

- use Navigate hook inside the provider.
-
