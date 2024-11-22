import React, { useState, useRef, useEffect } from 'react';
import { KeyRound } from 'lucide-react';

interface OtpVerificationProps {
  phone: string;
  onSubmit: (otp: string) => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ phone, onSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      onSubmit(otpString);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
          <KeyRound className="w-8 h-8 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Verify OTP</h1>
        <p className="text-gray-600 mt-2">
          Enter the OTP sent to +91 {phone}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              maxLength={1}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          disabled={otp.join('').length !== 6}
        >
          Verify OTP
        </button>

        <p className="text-center mt-4 text-gray-600">
          Didn't receive OTP?{' '}
          <button type="button" className="text-emerald-500 font-medium">
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
};

export default OtpVerification;