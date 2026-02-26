import React, { useState } from 'react';
import { 
  Megaphone, 
  FileText, 
  ClipboardList, 
  MessageSquare, 
  Users,
  Search,
  Plus,
  Paperclip,
  Send,
  MoreVertical,
  Download,
  ExternalLink,
  Youtube,
  Video
} from 'lucide-react';
import { MOCK_COURSES, MOCK_ANNOUNCEMENTS, MOCK_MESSAGES } from '../data/mockData';
import { cn } from '../utils/cn';

const ClassroomPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const course = MOCK_COURSES[0];

  const tabs = [
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'resources', label: 'Resources', icon: FileText },
    { id: 'assignments', label: 'Assignments', icon: ClipboardList },
    { id: 'chat', label: 'Class Chat', icon: MessageSquare },
    { id: 'study-groups', label: 'Study Groups', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: ClipboardList },
  ];

  return (
    <div className="space-y-6">
      {/* ... existing header ... */}
      
      {/* Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'announcements' && <AnnouncementsTab />}
        {activeTab === 'resources' && <ResourcesTab />}
        {activeTab === 'assignments' && <AssignmentsTab />}
        {activeTab === 'chat' && <ChatTab />}
        {activeTab === 'study-groups' && <StudyGroupsTab />}
        {activeTab === 'attendance' && <AttendanceTab />}
      </div>
    </div>
  );
};

const StudyGroupsTab = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-slate-900">Peer Study Groups</h3>
        <p className="text-sm text-slate-500">Join or create a collaborative meeting with your peers.</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm">
        <Plus size={18} />
        Start New Meeting
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_STUDENT_MEETINGS.map((meeting) => (
        <div key={meeting.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Users size={16} />
              </div>
              <span className="text-xs font-bold text-slate-400">{meeting.participants} Joined</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Active</span>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">{meeting.title}</h4>
          <p className="text-xs text-slate-500 mb-6">Host: {meeting.creator}</p>
          
          <a 
            href={meeting.meetLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-indigo-50 text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Video size={16} />
            Join Meeting
          </a>
        </div>
      ))}
      
      {/* Empty State / Create New Card */}
      <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white hover:border-indigo-300 transition-all group">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-300 group-hover:text-indigo-500 shadow-sm mb-3">
          <Plus size={24} />
        </div>
        <h4 className="font-bold text-slate-900 text-sm">Create Study Group</h4>
        <p className="text-xs text-slate-500 mt-1">Start a quick session for exam prep or homework help.</p>
      </button>
    </div>
  </div>
);

const AnnouncementsTab = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-slate-900">Recent Announcements</h3>
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search announcements..." 
          className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>
    </div>
    {MOCK_ANNOUNCEMENTS.map((ann) => (
      <div key={ann.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Megaphone size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{ann.title}</h4>
              <p className="text-xs text-slate-500">{ann.author} • {ann.date}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <MoreVertical size={20} />
          </button>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{ann.content}</p>
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-4">
          <button className="text-xs font-bold text-indigo-600 hover:underline">View Comments (4)</button>
          <button className="text-xs font-bold text-slate-400 hover:underline">Mark as Read</button>
        </div>
      </div>
    ))}
  </div>
);

const ResourcesTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: 'Lecture 01: Introduction', type: 'PDF', size: '2.4 MB', icon: FileText, color: 'text-red-500', bg: 'bg-red-50' },
      { title: 'Python Setup Guide', type: 'DOCX', size: '1.1 MB', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
      { title: 'Data Structures Visualizer', type: 'Link', icon: ExternalLink, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      { title: 'Algorithm Complexity Video', type: 'YouTube', icon: Youtube, color: 'text-red-600', bg: 'bg-red-50' },
    ].map((res, i) => (
      <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", res.bg)}>
          <res.icon className={res.color} size={24} />
        </div>
        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{res.title}</h4>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-bold text-slate-400 uppercase">{res.type} {res.size && `• ${res.size}`}</span>
          <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
            <Download size={18} />
          </button>
        </div>
      </div>
    ))}
  </div>
);

const AssignmentsTab = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
      <h3 className="font-bold text-slate-900">Course Assignments</h3>
      <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors">
        <Plus size={18} />
        Create New
      </button>
    </div>
    <div className="divide-y divide-slate-100">
      {[
        { title: 'Lab 01: Basic Syntax', due: 'Oct 15, 2023', status: 'Graded', score: '95/100' },
        { title: 'Assignment 02: Loops', due: 'Oct 22, 2023', status: 'Submitted', score: 'Pending' },
        { title: 'Midterm Project: Calculator', due: 'Nov 05, 2023', status: 'Pending', score: '-' },
      ].map((asg, i) => (
        <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
          <div>
            <h4 className="font-bold text-slate-900">{asg.title}</h4>
            <p className="text-xs text-slate-500 mt-1">Due Date: {asg.due}</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</p>
              <span className={cn(
                "text-xs font-bold",
                asg.status === 'Graded' ? "text-emerald-600" :
                asg.status === 'Submitted' ? "text-blue-600" : "text-amber-600"
              )}>{asg.status}</span>
            </div>
            <div className="text-right min-w-[60px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score</p>
              <p className="text-sm font-bold text-slate-900">{asg.score}</p>
            </div>
            <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-white hover:shadow-sm transition-all">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ChatTab = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 h-[600px] flex flex-col overflow-hidden">
    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          CS
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">CS101 Group Chat</h4>
          <p className="text-[10px] text-emerald-600 font-bold">12 Students Online</p>
        </div>
      </div>
      <button className="p-2 text-slate-400 hover:text-slate-600">
        <MoreVertical size={20} />
      </button>
    </div>

    <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/30">
      {MOCK_MESSAGES.map((msg) => (
        <div key={msg.id} className={cn(
          "flex flex-col max-w-[70%]",
          msg.isMe ? "ml-auto items-end" : "items-start"
        )}>
          {!msg.isMe && <span className="text-[10px] font-bold text-slate-400 mb-1 ml-1">{msg.senderName}</span>}
          <div className={cn(
            "px-4 py-2.5 rounded-2xl text-sm shadow-sm",
            msg.isMe 
              ? "bg-indigo-600 text-white rounded-tr-none" 
              : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
          )}>
            {msg.content}
          </div>
          <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
        </div>
      ))}
    </div>

    <div className="p-4 border-t border-slate-100 bg-white">
      <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
          <Paperclip size={20} />
        </button>
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2"
        />
        <button className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
          <Send size={18} />
        </button>
      </div>
    </div>
  </div>
);

const AttendanceTab = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
      <h3 className="font-bold text-slate-900">Attendance Tracker</h3>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-emerald-50 text-emerald-600 font-bold rounded-xl text-xs hover:bg-emerald-100 transition-colors">
          Mark Today's Attendance
        </button>
        <button className="px-4 py-2 bg-slate-50 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-100 transition-colors">
          Export Report
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Average Attendance</p>
          <h4 className="text-2xl font-bold text-emerald-700">92.4%</h4>
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Total Classes</p>
          <h4 className="text-2xl font-bold text-blue-700">24</h4>
        </div>
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Low Attendance Students</p>
          <h4 className="text-2xl font-bold text-amber-700">3</h4>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Enrollment ID</th>
              <th className="px-6 py-4">Classes Attended</th>
              <th className="px-6 py-4">Percentage</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: 'Alex Johnson', id: 'CS2023001', attended: 22, total: 24, status: 'Good' },
              { name: 'Sarah Miller', id: 'CS2023005', attended: 23, total: 24, status: 'Excellent' },
              { name: 'James Wilson', id: 'CS2023012', attended: 15, total: 24, status: 'At Risk' },
              { name: 'Emily Davis', id: 'CS2023018', attended: 21, total: 24, status: 'Good' },
            ].map((s, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-900">{s.name}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{s.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{s.attended}/{s.total}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[100px]">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          (s.attended/s.total) > 0.85 ? "bg-emerald-500" :
                          (s.attended/s.total) > 0.75 ? "bg-blue-500" : "bg-amber-500"
                        )} 
                        style={{ width: `${(s.attended/s.total) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{Math.round((s.attended/s.total) * 100)}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                    s.status === 'Excellent' ? "bg-emerald-100 text-emerald-700" :
                    s.status === 'Good' ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                  )}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ClassroomPage;
