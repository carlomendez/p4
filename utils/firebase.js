// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-fb382.firebaseapp.com",
  projectId: "blog-fb382",
  storageBucket: "blog-fb382.appspot.com",
  messagingSenderId: "695541409416",
  appId: "1:695541409416:web:45a2c723bd522ed29ca13d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);