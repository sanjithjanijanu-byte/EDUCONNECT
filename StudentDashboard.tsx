import React from 'react';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Calendar as CalendarIcon,
  Users,
  Plus,
  Video,
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { MOCK_USER, MOCK_COURSES, MOCK_ASSIGNMENTS, MOCK_STUDENT_MEETINGS } from '../data/mockData';
import { cn } from '../utils/cn';

const performanceData = [
  { name: 'Week 1', gpa: 3.2 },
  { name: 'Week 2', gpa: 3.4 },
  { name: 'Week 3', gpa: 3.3 },
  { name: 'Week 4', gpa: 3.6 },
  { name: 'Week 5', gpa: 3.5 },
  { name: 'Week 6', gpa: 3.8 },
];

const StudentDashboard: React.FC = () => {
  // ✅ REAL LOGGED-IN USER (fallback to mock)
  const user = JSON.parse(localStorage.getItem('user') || 'null') || MOCK_USER;

  const pendingAssignments = MOCK_ASSIGNMENTS.filter((a) => a.status === 'pending');
  const averageAttendance = Math.round(
    MOCK_COURSES.reduce((acc, c) => acc + c.attendance, 0) / MOCK_COURSES.length
  );

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hello, {user.name}!</h1>
          <p className="text-slate-500">Here's what's happening with your studies today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
          <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
            <CalendarIcon size={20} />
          </div>
          <div className="pr-4">
            <p className="text-xs text-slate-500 font-medium">Today's Date</p>
            <p className="text-sm font-bold text-slate-900">
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<BookOpen className="text-blue-600" />}
          label="Enrolled Courses"
          value={MOCK_COURSES.length.toString()}
          trend="+1 this semester"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Clock className="text-amber-600" />}
          label="Pending Tasks"
          value={pendingAssignments.length.toString()}
          trend="2 due this week"
          bgColor="bg-amber-50"
        />
        <StatCard
          icon={<CheckCircle2 className="text-emerald-600" />}
          label="Attendance"
          value={`${averageAttendance}%`}
          trend="Above threshold"
          bgColor="bg-emerald-50"
        />
        <StatCard
          icon={<TrendingUp className="text-indigo-600" />}
          label="Current GPA"
          value="3.82"
          trend="Top 5% of class"
          bgColor="bg-indigo-50"
        />
      </div>

      {/* Peer Study Groups Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Peer Study Groups</h3>
              <p className="text-xs text-slate-500">Collaborate with your classmates in real-time.</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm flex items-center gap-2">
            <Plus size={16} />
            Create Meeting
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_STUDENT_MEETINGS.map((meeting) => (
            <div
              key={meeting.id}
              className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  {meeting.courseId}
                </span>
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                  <Users size={10} />
                  {meeting.participants} Active
                </div>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{meeting.title}</h4>
              <p className="text-xs text-slate-500 mb-4">Started by {user.name}</p>
              <a
  href={meeting.meetLink}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center gap-2"
>
  <Video size={14} />
  Join Study Room
</a>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Academic Performance</h3>
            <select className="text-sm bg-slate-50 border-none rounded-lg focus:ring-0 text-slate-500 font-medium">
              <option>Current Semester</option>
              <option>Last Semester</option>
            </select>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  domain={[0, 4]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Area type="monotone" dataKey="gpa" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorGpa)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-6">Upcoming Deadlines</h3>

          <div className="space-y-4">
            {MOCK_ASSIGNMENTS.map((assignment) => (
              <div key={assignment.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div
                  className={cn(
                    'mt-1 p-2 rounded-lg',
                    assignment.status === 'pending' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                  )}
                >
                  {assignment.status === 'pending' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {assignment.title}
                  </p>
                  <p className="text-xs text-slate-500">{assignment.courseName}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock size={12} className="text-slate-400" />
                    <span className="text-[11px] font-medium text-slate-400">Due: {assignment.dueDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
            View All Assignments
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900">My Enrolled Courses</h3>
          <button className="text-sm font-bold text-indigo-600 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_COURSES.map((course) => (
            <div key={course.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                  {course.code}
                </span>
                <span className="text-xs font-bold text-slate-400">Sem 1</span>
              </div>

              <h4 className="font-bold text-slate-900 mb-1">{course.name}</h4>
              <p className="text-xs text-slate-500 mb-4">{course.faculty}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Attendance</span>
                  <span className={cn('font-bold', course.attendance > 80 ? 'text-emerald-600' : 'text-amber-600')}>
                    {course.attendance}%
                  </span>
                </div>

                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full', course.attendance > 80 ? 'bg-emerald-500' : 'bg-amber-500')}
                    style={{ width: `${course.attendance}%` }}
                  />
                </div>
              </div>
              

              <button className="w-full mt-5 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                Enter Classroom
              </button>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, trend, bgColor }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', bgColor)}>{icon}</div>
    <p className="text-sm font-medium text-slate-500">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
    <p className="text-xs text-slate-400 mt-1 font-medium">{trend}</p>
  </div>
);

export default StudentDashboard;