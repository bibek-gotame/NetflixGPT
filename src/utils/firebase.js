// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAheJZpM5uvq8XBMf-0OYF_kDZteZQYwkg",
  authDomain: "netflixgpt-011.firebaseapp.com",
  projectId: "netflixgpt-011",
  storageBucket: "netflixgpt-011.appspot.com",
  messagingSenderId: "714663600230",
  appId: "1:714663600230:web:5fa9ccfc0336c878b84da7",
  measurementId: "G-NFYEZBKWES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);