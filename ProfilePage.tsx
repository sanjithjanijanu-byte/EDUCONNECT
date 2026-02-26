import React from 'react';
import { User, Mail, Shield, Bell, Lock, Globe } from 'lucide-react';
import { MOCK_USER } from '../data/mockData';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 bg-indigo-600" />
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="w-24 h-24 rounded-2xl border-4 border-white overflow-hidden shadow-md">
              <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all text-sm">
              Edit Profile
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{MOCK_USER.name}</h1>
                <p className="text-slate-500 font-medium">{MOCK_USER.department} • {MOCK_USER.enrollmentNo}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Mail size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Email Address</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">{MOCK_USER.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Shield size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Account Role</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 capitalize">{MOCK_USER.role}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-4">About Me</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Computer Science student passionate about web development and artificial intelligence. 
                  Currently focusing on full-stack technologies and data structures.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Courses</span>
                    <span className="text-sm font-bold text-slate-900">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Assignments</span>
                    <span className="text-sm font-bold text-slate-900">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Attendance</span>
                    <span className="text-sm font-bold text-emerald-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
