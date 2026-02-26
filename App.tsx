/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ClassroomPage from './pages/ClassroomPage';
import ChatPage from './pages/ChatPage';
import TimetablePage from './pages/TimetablePage';
import TaskManagerPage from './pages/TaskManagerPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<ClassroomPage />} />
          <Route path="timetable" element={<TimetablePage />} />
          <Route path="tasks" element={<TaskManagerPage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>

        {/* Faculty Routes */}
        <Route path="/faculty" element={<DashboardLayout role="faculty" />}>
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="courses" element={<ClassroomPage />} />
          <Route path="tasks" element={<TaskManagerPage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminDashboard />} />
          <Route path="departments" element={<AdminDashboard />} />
        </Route>

        {/* Shared Routes */}
        <Route path="/" element={<DashboardLayout role="student" />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
