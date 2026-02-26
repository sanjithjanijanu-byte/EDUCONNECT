import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckSquare
} from 'lucide-react';
import { cn } from '../utils/cn';
import { Role } from '../data/mockData';

interface SidebarProps {
  role: Role;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const studentLinks = [
    { to: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/student/courses', icon: BookOpen, label: 'My Courses' },
    { to: '/student/timetable', icon: Calendar, label: 'Timetable' },
    { to: '/student/tasks', icon: CheckSquare, label: 'Task Manager' },
    { to: '/student/chat', icon: MessageSquare, label: 'Messages' },
  ];

  const facultyLinks = [
    { to: '/faculty/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/faculty/courses', icon: BookOpen, label: 'Manage Courses' },
    { to: '/faculty/tasks', icon: CheckSquare, label: 'Task Manager' },
    { to: '/faculty/chat', icon: MessageSquare, label: 'Messages' },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { to: '/admin/users', icon: Users, label: 'Manage Users' },
    { to: '/admin/departments', icon: ShieldCheck, label: 'Departments' },
  ];

  const links = role === 'student' ? studentLinks : role === 'faculty' ? facultyLinks : adminLinks;

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <GraduationCap size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight">EduConnect</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
          Main Menu
        </div>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-indigo-600 text-white" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )
            }
          >
            <link.icon size={20} />
            <span className="font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-1">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
        >
          <User size={20} />
          <span className="font-medium">Profile</span>
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </NavLink>
        <button
          onClick={() => window.location.href = '/login'}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
