// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8S7gNFBQhVaD5QcLqANZ-hyYQNkX6rg",
  authDomain: "todo-app-38d80.firebaseapp.com",
  projectId: "todo-app-38d80",
  storageBucket: "todo-app-38d80.appspot.com",
  messagingSenderId: "113178329838",
  appId: "1:113178329838:web:922c94aece16c59017a9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;