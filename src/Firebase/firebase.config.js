// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXqFNEr8s82MXXIom8RHJ6--DhsnnXmj8",
  authDomain: "practice-doctor.firebaseapp.com",
  projectId: "practice-doctor",
  storageBucket: "practice-doctor.appspot.com",
  messagingSenderId: "628759606832",
  appId: "1:628759606832:web:c0da6e043a4aa1178c5ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;