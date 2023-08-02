// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAFGQk0O6ZXLFcbfCZhsV0YFchy3UVw4U",
  authDomain: "mixologymate.firebaseapp.com",
  projectId: "mixologymate",
  storageBucket: "mixologymate.appspot.com",
  messagingSenderId: "489116524313",
  appId: "1:489116524313:web:ca601e5b6014bf294f2f88",
  measurementId: "G-QPKSYJNQ21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);