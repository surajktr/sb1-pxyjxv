import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import EmailAuth from './components/EmailAuth';
import GoogleAuth from './components/GoogleAuth';
import HomePage from './pages/HomePage';

export type AuthMode = 'signup' | 'signin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <HomePage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <EmailAuth
          mode={authMode}
          onModeSwitch={() => setAuthMode(authMode === 'signup' ? 'signin' : 'signup')}
          onSuccess={() => setIsAuthenticated(true)}
        />
        <div className="mt-4">
          <GoogleAuth onSuccess={() => setIsAuthenticated(true)} />
        </div>
      </div>
    </div>
  );
}

export default App;
