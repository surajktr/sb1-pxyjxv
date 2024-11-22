import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYBQjxH5TuSQQGwmZU_Fy5vZJuuGqhgtY",
  authDomain: "testbook-clone.firebaseapp.com",
  projectId: "testbook-clone",
  storageBucket: "testbook-clone.appspot.com",
  messagingSenderId: "654321098765",
  appId: "1:654321098765:web:abcdef123456789"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();