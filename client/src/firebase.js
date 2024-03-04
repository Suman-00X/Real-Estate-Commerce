// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCcjf-FhOlT-HPT7f4DwY5ALEMiBXNfEU",
  authDomain: "ghar-dekho1.firebaseapp.com",
  projectId: "ghar-dekho1",
  storageBucket: "ghar-dekho1.appspot.com",
  messagingSenderId: "904891092782",
  appId: "1:904891092782:web:eac29793dbe74dfb8cb4bf",
  measurementId: "G-96HJDNMP98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);