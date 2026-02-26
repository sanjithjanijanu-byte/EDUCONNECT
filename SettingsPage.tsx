import React from 'react';
import { Bell, Lock, Globe, User, Shield, Eye } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const sections = [
    {
      title: 'Account Settings',
      icon: User,
      items: [
        { label: 'Personal Information', desc: 'Update your name, email, and profile photo' },
        { label: 'Password & Security', desc: 'Change your password and enable 2FA' },
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', desc: 'Choose what updates you want to receive via email' },
        { label: 'Push Notifications', desc: 'Manage mobile and desktop alerts' },
      ]
    },
    {
      title: 'Privacy',
      icon: Shield,
      items: [
        { label: 'Profile Visibility', desc: 'Control who can see your profile and activity' },
        { label: 'Data & Privacy', desc: 'Manage your personal data and institutional records' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account preferences and system settings.</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
              <section.icon size={18} className="text-indigo-600" />
              <h3 className="font-bold text-slate-900">{section.title}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {section.items.map((item, j) => (
                <button key={j} className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left group">
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <Eye size={16} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm">
          Discard Changes
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
