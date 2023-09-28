// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkYwFlXFgsPdcVQYMSK86rvaTfGOo2iZc",
  authDomain: "nonforsit-747f0.firebaseapp.com",
  projectId: "nonforsit-747f0",
  storageBucket: "nonforsit-747f0.appspot.com",
  messagingSenderId: "70567802076",
  appId: "1:70567802076:web:66652f8240fda367bd7019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)