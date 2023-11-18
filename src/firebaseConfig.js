// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjYaZNjrW2oL2Ezt6phsrxT_Y9jMpGSI",
  authDomain: "illena.firebaseapp.com",
  projectId: "illena",
  storageBucket: "illena.appspot.com",
  messagingSenderId: "670278414687",
  appId: "1:670278414687:web:a8f2b91375bd0368d1c6ea",
  measurementId: "G-8VK0WP3JS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)