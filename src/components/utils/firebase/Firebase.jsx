// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz_AURoKU00kjXMea9XgmnsMJRe_-0_XA",
  authDomain: "newspaper-4d9ed.firebaseapp.com",
  projectId: "newspaper-4d9ed",
  storageBucket: "newspaper-4d9ed.firebasestorage.app",
  messagingSenderId: "327038710176",
  appId: "1:327038710176:web:2201106bca781de5b774c5",
  measurementId: "G-H7ZYZ6ERRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)