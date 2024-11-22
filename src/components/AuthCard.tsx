import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ icon: Icon, title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default AuthCard;