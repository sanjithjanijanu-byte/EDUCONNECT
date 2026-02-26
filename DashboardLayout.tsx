import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Role } from '../data/mockData';

interface DashboardLayoutProps {
  role: Role;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
