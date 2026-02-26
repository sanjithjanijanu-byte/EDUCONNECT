import React from 'react';
import {
  Users,
  FileText,
  Plus,
  Megaphone,
  ClipboardCheck,
  MoreVertical,
  ArrowUpRight,
  Download,
  Video,
} from 'lucide-react';

import { MOCK_COURSES, MOCK_ANNOUNCEMENTS } from '../data/mockData';
import { cn } from '../utils/cn';

const FacultyDashboard: React.FC = () => {

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Faculty Dashboard
          </h1>

          <p className="text-slate-500">
            Manage your courses, students, and academic activities.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm">
            <Megaphone size={18} />
            Announcement
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all text-sm">
            <Video size={18} />
            Start Live Class
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm">
            <Plus size={18} />
            Create Course
          </button>

        </div>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">

          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
            <Users size={28} />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Total Students
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              1,240
            </h3>

            <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <ArrowUpRight size={12} />
              +12% from last sem
            </p>
          </div>

        </div>


        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">

          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <FileText size={28} />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Active Courses
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              4
            </h3>

            <p className="text-xs text-slate-400 font-medium">
              Across 2 departments
            </p>
          </div>

        </div>


        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">

          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
            <ClipboardCheck size={28} />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Avg. Attendance
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              88.5%
            </h3>

            <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <ArrowUpRight size={12} />
              Good engagement
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FacultyDashboard;