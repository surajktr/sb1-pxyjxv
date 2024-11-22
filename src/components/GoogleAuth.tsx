import React, { useState } from 'react';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const GoogleAuth: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      // Try popup first
      try {
        await signInWithPopup(auth, googleProvider);
        onSuccess();
      } catch (popupError: any) {
        // If popup is blocked, fallback to redirect
        if (popupError?.code === 'auth/popup-blocked') {
          await signInWithRedirect(auth, googleProvider);
        } else {
          throw popupError;
        }
      }
    } catch (error: any) {
      setError(error?.message || 'Failed to sign in with Google');
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
      )}
    </div>
  );
};

export default GoogleAuth;