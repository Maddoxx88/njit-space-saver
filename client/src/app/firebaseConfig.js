// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPbMAW4KMRL2k7hZBtWNmOUh0rtrdDY_w",
  authDomain: "njit-parking-sim.firebaseapp.com",
  projectId: "njit-parking-sim",
  storageBucket: "njit-parking-sim.appspot.com",
  messagingSenderId: "873923687018",
  appId: "1:873923687018:web:dc51b2a95cdf6cb9b6d013",
  measurementId: "G-0M44ZJXBLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);