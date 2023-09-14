// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnhMqAZroe_cezq-VDWeygopaoPxxVbmc",
  authDomain: "whatsapp-2ed7f.firebaseapp.com",
  projectId: "whatsapp-2ed7f",
  storageBucket: "whatsapp-2ed7f.appspot.com",
  messagingSenderId: "239895452711",
  appId: "1:239895452711:web:a54ca96228a344665dc202",
  measurementId: "G-K4WM6GNR81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

