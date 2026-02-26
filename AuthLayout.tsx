import React from 'react';
import { Outlet } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-200">
          <GraduationCap size={32} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">EduConnect</h1>
      </div>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
      <footer className="mt-8 text-slate-400 text-sm">
        &copy; 2023 EduConnect Academic Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
