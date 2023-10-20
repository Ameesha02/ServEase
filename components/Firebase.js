// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2n6dqLb9rogpViNI059KaDRL2hkIAU-A",
  authDomain: "servease-647f8.firebaseapp.com",
  projectId: "servease-647f8",
  storageBucket: "servease-647f8.appspot.com",
  messagingSenderId: "504123031086",
  appId: "1:504123031086:web:91a3bd430feff95cfc29bf",
  measurementId: "G-0H0GC04FJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
// project-504123031086