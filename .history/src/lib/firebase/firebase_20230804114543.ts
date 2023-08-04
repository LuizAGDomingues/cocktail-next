// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const projectId = process.env.PROJECT_ID
const storageBucket = process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGING_SENDER_ID
const appId = process.env.APP_ID
const measurementId = process.env.MEASUREMENT_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);