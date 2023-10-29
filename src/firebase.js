// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYnAOO5WB6c1itQ6ql3wgZSYlEQ8rZwMs",
  authDomain: "fir-app-tuto-155d6.firebaseapp.com",
  databaseURL: "https://fir-app-tuto-155d6-default-rtdb.firebaseio.com",
  projectId: "fir-app-tuto-155d6",
  storageBucket: "fir-app-tuto-155d6.appspot.com",
  messagingSenderId: "562426211694",
  appId: "1:562426211694:web:ce757a7c627952bfd9257f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);