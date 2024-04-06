// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp0Da5Yu4tOkh5xNMPpc0AEuX5ruGeFts",
  authDomain: "netflixgpt-bfad8.firebaseapp.com",
  projectId: "netflixgpt-bfad8",
  storageBucket: "netflixgpt-bfad8.appspot.com",
  messagingSenderId: "801364437404",
  appId: "1:801364437404:web:3a2320e2cb0dce423ec059",
  measurementId: "G-LJ13GJHPL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);