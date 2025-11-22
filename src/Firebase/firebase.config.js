// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2biz7WNXnmTQvoPdMTkSNulIDwuQHY8",
  authDomain: "assignment10-44ac8.firebaseapp.com",
  projectId: "assignment10-44ac8",
  storageBucket: "assignment10-44ac8.firebasestorage.app",
  messagingSenderId: "324969325371",
  appId: "1:324969325371:web:c6ba0db8df1d8038774d1e"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);