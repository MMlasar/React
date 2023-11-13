// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfsoawEv8FwvoBSC9Yc89hOseW2PL22S0",
  authDomain: "balanzasshop.firebaseapp.com",
  projectId: "balanzasshop",
  storageBucket: "balanzasshop.appspot.com",
  messagingSenderId: "584528542278",
  appId: "1:584528542278:web:fbe6a711b7fc2d2671a847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);