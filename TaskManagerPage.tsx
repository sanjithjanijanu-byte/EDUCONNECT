import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  Calendar, 
  Tag, 
  AlertCircle,
  Filter,
  Search,
  CheckCircle
} from 'lucide-react';
import { cn } from '../utils/cn';

interface Task {
  id: string;
  title: string;
  category: 'Academic' | 'Personal' | 'Urgent';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  completed: boolean;
}

const TaskManagerPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Finish CS101 Lab Report', category: 'Academic', priority: 'High', dueDate: '2023-11-20', completed: false },
    { id: '2', title: 'Buy textbooks for next semester', category: 'Personal', priority: 'Medium', dueDate: '2023-11-25', completed: true },
    { id: '3', title: 'Submit scholarship application', category: 'Urgent', priority: 'High', dueDate: '2023-11-18', completed: false },
    { id: '4', title: 'Prepare for group presentation', category: 'Academic', priority: 'Medium', dueDate: '2023-11-22', completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<Task['category']>('Academic');
  const [newTaskPriority, setNewTaskPriority] = useState<Task['priority']>('Medium');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      category: newTaskCategory,
      priority: newTaskPriority,
      dueDate: new Date().toISOString().split('T')[0],
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Task Manager</h1>
          <p className="text-slate-500">Keep track of your academic and personal goals.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <CheckCircle size={18} />
            <span className="text-sm font-bold">{stats.completed}/{stats.total} Completed</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task Creation Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6">Create New Task</h3>
            <form onSubmit={addTask} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Task Title</label>
                <input 
                  type="text" 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="What needs to be done?" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Category</label>
                  <select 
                    value={newTaskCategory}
                    onChange={(e) => setNewTaskCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Priority</label>
                  <select 
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Task
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Filters</h4>
              <div className="space-y-2">
                {(['all', 'active', 'completed'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg text-sm font-bold text-left transition-all capitalize",
                      filter === f ? "bg-indigo-50 text-indigo-600" : "text-slate-500 hover:bg-slate-50"
                    )}
                  >
                    {f} Tasks
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-slate-900">Your Tasks ({filteredTasks.length})</h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search tasks..." 
                  className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-bold text-slate-900">No tasks found</h4>
              <p className="text-sm text-slate-500 mt-1">You're all caught up! Enjoy your free time.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div 
                  key={task.id} 
                  className={cn(
                    "bg-white p-4 rounded-2xl shadow-sm border transition-all flex items-center gap-4 group",
                    task.completed ? "border-slate-100 opacity-75" : "border-slate-200 hover:border-indigo-200"
                  )}
                >
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "shrink-0 transition-colors",
                      task.completed ? "text-emerald-500" : "text-slate-300 hover:text-indigo-500"
                    )}
                  >
                    {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={cn(
                      "font-bold text-slate-900 truncate",
                      task.completed && "line-through text-slate-400"
                    )}>
                      {task.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                        <Tag size={10} />
                        {task.category}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                        <Calendar size={10} />
                        {task.dueDate}
                      </div>
                      <div className={cn(
                        "flex items-center gap-1 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded",
                        task.priority === 'High' ? "bg-red-50 text-red-600" :
                        task.priority === 'Medium' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                      )}>
                        <AlertCircle size={10} />
                        {task.priority}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManagerPage;
