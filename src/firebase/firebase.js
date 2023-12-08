// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FB_APP_ID
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
const firebaseAuth = getAuth(firebaseApp);

export{ firebaseAuth }