// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "real-time-chatapp-1b943.firebaseapp.com",
    projectId: "real-time-chatapp-1b943",
    storageBucket: "real-time-chatapp-1b943.firebasestorage.app",
    messagingSenderId: "1022337138936",
    appId: "1:1022337138936:web:0c2c88f494d70245c77b0d"
};

// You have to get this data from your account not mine

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
