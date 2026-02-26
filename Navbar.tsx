/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Bell, Search } from "lucide-react";
import { MOCK_USER } from "../data/mockData";

const Navbar: React.FC = () => {

  // Get logged-in user OR fallback to mock user
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : MOCK_USER;

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">

      {/* Search section */}
      <div className="flex items-center w-full max-w-md bg-slate-100 rounded-lg px-3 py-2">
        <Search className="w-5 h-5 text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Notification icon */}
        <div className="relative">
          <Bell className="w-6 h-6 text-slate-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3">

          {/* Name and Role */}
          <div className="text-right">
            <div className="font-semibold text-sm">
              {user.name}
            </div>
            <div className="text-xs text-slate-500 capitalize">
              {user.role}
            </div>
          </div>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;