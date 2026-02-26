import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ExternalLink, Video } from 'lucide-react';
import { MOCK_TIMETABLE } from '../data/mockData';
import { cn } from '../utils/cn';

const TimetablePage: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Weekly Timetable</h1>
          <p className="text-slate-500">Your scheduled classes and academic sessions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <CalendarIcon size={18} />
            Download PDF
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-sm flex items-center gap-2">
            <Video size={18} />
            Join Next Class
          </button>
        </div>
      </div>

      {/* Desktop Timetable Grid */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-6 border-b border-slate-100">
          <div className="p-4 bg-slate-50 border-r border-slate-100 flex items-center justify-center">
            <Clock size={18} className="text-slate-400" />
          </div>
          {days.map(day => (
            <div key={day} className="p-4 bg-slate-50 border-r border-slate-100 last:border-r-0 text-center">
              <span className="text-sm font-bold text-slate-900">{day}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          {timeSlots.map((time, idx) => (
            <div key={time} className="grid grid-cols-6 border-b border-slate-50 last:border-b-0 h-32">
              <div className="p-4 border-r border-slate-100 flex items-start justify-center">
                <span className="text-xs font-bold text-slate-400">{time}</span>
              </div>
              {days.map(day => {
                const dayData = MOCK_TIMETABLE.find(d => d.day === day);
                const classData = dayData?.classes.find(c => c.time.startsWith(time));
                
                return (
                  <div key={`${day}-${time}`} className="p-2 border-r border-slate-100 last:border-r-0 relative group">
                    {classData && (
                      <div className={cn(
                        "h-full w-full rounded-xl p-3 flex flex-col justify-between transition-all cursor-pointer",
                        classData.subject === 'Seminar' ? "bg-purple-50 border border-purple-100 text-purple-700" :
                        classData.subject.startsWith('CS1') ? "bg-indigo-50 border border-indigo-100 text-indigo-700" :
                        classData.subject.startsWith('CS2') ? "bg-blue-50 border border-blue-100 text-blue-700" :
                        "bg-emerald-50 border border-emerald-100 text-emerald-700"
                      )}>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{classData.time}</p>
                          <h4 className="font-bold text-sm leading-tight">{classData.subject}</h4>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 opacity-70">
                            <MapPin size={10} />
                            <span className="text-[10px] font-bold">{classData.room}</span>
                          </div>
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden space-y-6">
        {MOCK_TIMETABLE.map((day) => (
          <div key={day.day} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">{day.day}</h3>
            </div>
            <div className="p-4 space-y-4">
              {day.classes.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-16 text-center border-r border-slate-200 pr-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Time</p>
                    <p className="text-xs font-bold text-slate-700">{c.time.split(' - ')[0]}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{c.subject}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin size={12} />
                        <span className="text-xs font-medium">{c.room}</span>
                      </div>
                      <div className="flex items-center gap-1 text-indigo-600">
                        <Video size={12} />
                        <span className="text-xs font-bold">Online</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-indigo-600 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetablePage;
