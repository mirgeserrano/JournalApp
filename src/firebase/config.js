// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT2kdv7idmQSH-GBqrYbwueloQXa3jB9A",
  authDomain: "react-cursos-41a44.firebaseapp.com",
  projectId: "react-cursos-41a44",
  storageBucket: "react-cursos-41a44.appspot.com",
  messagingSenderId: "625471738835",
  appId: "1:625471738835:web:f475d7ed424d0b04b5d526",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
