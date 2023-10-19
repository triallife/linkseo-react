// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsQQqUHalxLJA6IoVvlseorf3fNvyregs",
  authDomain: "linkseo-73d91.firebaseapp.com",
  projectId: "linkseo-73d91",
  storageBucket: "linkseo-73d91.appspot.com",
  messagingSenderId: "856859705783",
  appId: "1:856859705783:web:14db0ea426ba17259e6832",
  measurementId: "G-4RH9XGJXVY"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export default db;