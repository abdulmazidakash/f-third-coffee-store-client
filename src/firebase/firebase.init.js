// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8QbxPPbWQ4WyiWO_mAu1XJly0haP-j58",
  authDomain: "f-third-coffee-store.firebaseapp.com",
  projectId: "f-third-coffee-store",
  storageBucket: "f-third-coffee-store.firebasestorage.app",
  messagingSenderId: "260493516438",
  appId: "1:260493516438:web:12195ad5b059537e54ecb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);