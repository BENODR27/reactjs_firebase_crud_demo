// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOREgxQJ5BxxODrveJmniClWuzBMXUWh8",
  authDomain: "withben-cb16f.firebaseapp.com",
  projectId: "withben-cb16f",
  storageBucket: "withben-cb16f.firebasestorage.app",
  messagingSenderId: "608381169472",
  appId: "1:608381169472:web:aa4f7f682e22dad1fc54a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);