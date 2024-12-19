// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTHDOMAIN ,
  projectId: import.meta.env.VITE_PROJECTID  ,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGEINGSENDERID,
  appId: import.meta.env.VITE_APPID

  // apiKey: "AIzaSyB7mmTRzjdx9QgDtOQwrHe7qDC1whG8u0Q",
  // authDomain: "assignment-1010.firebaseapp.com",
  // projectId: "assignment-1010",
  // storageBucket: "assignment-1010.appspot.com",
  // messagingSenderId: "99825545710",
  // appId: "1:99825545710:web:00f072eb99c5c936c71eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app