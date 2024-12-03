import React from 'react';
import { Search, Bell, Star, Settings, List, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-500">Workspace</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-sm text-gray-900">{location.pathname.slice(1) || 'Home'}</span>
        </div>
        <div className="flex space-x-2 ml-6">
          <Link
            to="/list"
            className={`p-2 rounded-lg ${
              location.pathname === '/list'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-400 hover:bg-gray-100'
            }`}
          >
            <List size={20} />
          </Link>
          <Link
            to="/calendar"
            className={`p-2 rounded-lg ${
              location.pathname === '/calendar'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-400 hover:bg-gray-100'
            }`}
          >
            <Calendar size={20} />
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/notifications" className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} className="text-gray-600" />
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Star size={20} className="text-gray-600" />
          </button>
          <Link to="/settings" className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} className="text-gray-600" />
          </Link>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;