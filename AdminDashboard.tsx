import React from 'react';
import { 
  Users, 
  Building2, 
  ShieldCheck, 
  BarChart3,
  Search,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const deptData = [
  { name: 'Comp Sci', students: 450, performance: 88 },
  { name: 'Engineering', students: 380, performance: 82 },
  { name: 'Business', students: 320, performance: 85 },
  { name: 'Arts', students: 210, performance: 78 },
  { name: 'Science', students: 290, performance: 84 },
];

const COLORS = ['#4f46e5', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Institutional Overview</h1>
          <p className="text-slate-500">Manage users, departments, and monitor overall performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm">
            Add New User
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <ArrowUpRight size={12} /> +4%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Total Students</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">8,432</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <ArrowUpRight size={12} /> +2%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Faculty Members</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">420</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Stable</span>
          </div>
          <p className="text-sm font-medium text-slate-500">Departments</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">12</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
              <BarChart3 size={20} />
            </div>
            <span className="text-xs font-bold text-red-600 flex items-center gap-1">
              <ArrowDownRight size={12} /> -1%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Avg. GPA</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">3.42</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Department Performance Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-6">Department Performance</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="performance" radius={[4, 4, 0, 0]}>
                  {deptData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent User Registrations */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Recent User Registrations</h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
              <button className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                <Filter size={16} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Alice Wong', role: 'Student', dept: 'Comp Sci', status: 'Active' },
                  { name: 'Robert Fox', role: 'Faculty', dept: 'Engineering', status: 'Active' },
                  { name: 'Jane Cooper', role: 'Student', dept: 'Business', status: 'Pending' },
                  { name: 'Cody Fisher', role: 'Admin', dept: 'Institutional', status: 'Active' },
                  { name: 'Guy Hawkins', role: 'Student', dept: 'Arts', status: 'Inactive' },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${i + 20}/32`} alt="User" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        user.role === 'Admin' ? 'bg-purple-50 text-purple-600' :
                        user.role === 'Faculty' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{user.dept}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          user.status === 'Active' ? 'bg-emerald-500' :
                          user.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
                        }`} />
                        <span className="text-xs font-medium text-slate-600">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-center">
            <button className="text-xs font-bold text-indigo-600 hover:underline">View All Users</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
