// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNxPDd6HsjDFR0Le2LGFbdG2Y8lc03Ghw",
  authDomain: "pantryapp-4e494.firebaseapp.com",
  projectId: "pantryapp-4e494",
  storageBucket: "pantryapp-4e494.appspot.com",
  messagingSenderId: "861511592420",
  appId: "1:861511592420:web:c8843732c514a087e5fff1",
  measurementId: "G-E0QKNY9MPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};

