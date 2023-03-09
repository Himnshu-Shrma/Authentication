// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Vu6Irk8BF2CVq4kXCZ7qQwt7QqzjEh4",
  authDomain: "learnerhub-3b12e.firebaseapp.com",
  projectId: "learnerhub-3b12e",
  storageBucket: "learnerhub-3b12e.appspot.com",
  messagingSenderId: "675968039498",
  appId: "1:675968039498:web:c9e34a233c31059ecc44b3",
  measurementId: "G-8SJWBTFX0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}'
Get Auth is dine
