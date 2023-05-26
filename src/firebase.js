// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqnsQZhwDrChHpVnxO0AyIUXwR-YFS1-E",
  authDomain: "newsapp-45dd4.firebaseapp.com",
  projectId: "newsapp-45dd4",
  storageBucket: "newsapp-45dd4.appspot.com",
  messagingSenderId: "77693379880",
  appId: "1:77693379880:web:1530dce27455f721ee9c1d",
  measurementId: "G-Q1F2QJFG8C",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, app, analytics, provider };
