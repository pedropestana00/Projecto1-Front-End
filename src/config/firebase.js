// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-7CX68G3O3cx-pvJtN5Knr9W1BYUmkr8",
  authDomain: "projeto2526-6a582.firebaseapp.com",
  projectId: "projeto2526-6a582",
  storageBucket: "projeto2526-6a582.firebasestorage.app",
  messagingSenderId: "1048877891409",
  appId: "1:1048877891409:web:b99705e3c51a27eb249d70",
  measurementId: "G-TRMW5J6HV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);