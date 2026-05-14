
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-8bb05.firebaseapp.com",
  projectId: "interview-8bb05",
  storageBucket: "interview-8bb05.firebasestorage.app",
  messagingSenderId: "763544827597",
  appId: "1:763544827597:web:d5dcf7c21c8f013a669b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}