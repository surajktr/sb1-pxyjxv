// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcxgyXd7N5uhlpgKKsvpGkQF8emJbirH0",
  authDomain: "testbook-624a4.firebaseapp.com",
  projectId: "testbook-624a4",
  storageBucket: "testbook-624a4.firebasestorage.app",
  messagingSenderId: "182915827198",
  appId: "1:182915827198:web:cab76366aac2fa206aacaf",
  measurementId: "G-NCCPR4X83K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
