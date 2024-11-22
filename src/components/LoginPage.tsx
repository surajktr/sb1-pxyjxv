import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface LoginPageProps {
  onSubmit: (phone: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSubmit }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    onSubmit(phone);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Get started with Testbook!
        </h1>
        <p className="text-gray-600 mt-2">
          Continue with your mobile number
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="relative">
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 10) setPhone(value);
                setError('');
              }}
              className={`w-full px-4 py-3 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors`}
              placeholder="Please Enter your mobile number"
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginPage;