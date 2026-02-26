import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Phone, 
  Video, 
  Info, 
  Paperclip, 
  Smile, 
  Send,
  CheckCheck,
  Circle
} from 'lucide-react';
import { MOCK_MESSAGES, MOCK_COURSES } from '../data/mockData';
import { cn } from '../utils/cn';

const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState('c1');

  const chats = [
    { id: 'c1', name: 'CS101 Group Chat', lastMsg: 'Sure Alex, what is it?', time: '10:36 AM', unread: 0, type: 'group', online: true },
    { id: 'c2', name: 'Dr. Sarah Smith', lastMsg: 'Please check the new resources.', time: '09:15 AM', unread: 2, type: 'private', online: true },
    { id: 'c3', name: 'CS202 Group Chat', lastMsg: 'When is the next lab?', time: 'Yesterday', unread: 0, type: 'group', online: false },
    { id: 'u1', name: 'Alex Johnson', lastMsg: 'Hey, did you finish the assignment?', time: 'Yesterday', unread: 0, type: 'private', online: true },
    { id: 'u2', name: 'Sarah Miller', lastMsg: 'See you in the library!', time: 'Monday', unread: 0, type: 'private', online: false },
  ];

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-100 flex flex-col">
        <div className="p-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Messages</h2>
            <button className="p-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors">
              <Plus size={20} />
            </button>
          </div>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={cn(
                "w-full p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0",
                selectedChat === chat.id ? "bg-indigo-50/50 border-l-4 border-l-indigo-600" : ""
              )}
            >
              <div className="relative shrink-0">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm",
                  chat.type === 'group' ? "bg-indigo-600" : "bg-slate-200"
                )}>
                  {chat.type === 'group' ? chat.name.substring(0, 2) : (
                    <img src={`https://picsum.photos/seed/${chat.id}/48`} className="w-full h-full rounded-full object-cover" alt="" />
                  )}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{chat.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 truncate pr-2">{chat.lastMsg}</p>
                  {chat.unread > 0 && (
                    <span className="bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              CS
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">CS101 Group Chat</h4>
              <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                <Circle size={8} fill="currentColor" /> 12 Students Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Video size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Info size={20} />
            </button>
            <div className="w-px h-6 bg-slate-200 mx-2" />
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
              Today
            </span>
          </div>

          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className={cn(
              "flex flex-col max-w-[70%]",
              msg.isMe ? "ml-auto items-end" : "items-start"
            )}>
              {!msg.isMe && (
                <div className="flex items-center gap-2 mb-1 ml-1">
                  <span className="text-[10px] font-bold text-slate-900">{msg.senderName}</span>
                  <span className="text-[10px] font-medium text-slate-400">Faculty</span>
                </div>
              )}
              <div className={cn(
                "px-4 py-2.5 rounded-2xl text-sm shadow-sm relative group",
                msg.isMe 
                  ? "bg-indigo-600 text-white rounded-tr-none" 
                  : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
              )}>
                {msg.content}
                <div className={cn(
                  "absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity",
                  msg.isMe ? "-left-8" : "-right-8"
                )}>
                  <button className="p-1 text-slate-400 hover:text-slate-600">
                    <Smile size={14} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1 px-1">
                <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                {msg.isMe && <CheckCheck size={12} className="text-indigo-400" />}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
            <div className="flex items-center">
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Paperclip size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Smile size={20} />
              </button>
            </div>
            <input 
              type="text" 
              placeholder="Type your message here..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-slate-700"
            />
            <button className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 active:scale-95">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
