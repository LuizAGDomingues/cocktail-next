// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.
const authDomain = 
const projectId = 
const storageBucket = 
const messagingSenderId = 
const appId = 
const measurementId = 

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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);