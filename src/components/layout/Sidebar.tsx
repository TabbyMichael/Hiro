import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, CheckSquare, Target, Users, ChevronLeft, ListTodo, ClipboardList } from 'lucide-react';

const Sidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 ${
      isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
    } rounded-lg`;

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Hiro</h1>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ChevronLeft size={20} />
        </button>
      </div>

      <nav className="space-y-2">
        <NavLink to="/" className={navLinkClass}>
          <Home className="mr-3" size={20} />
          Home
        </NavLink>
        <NavLink to="/my-tasks" className={navLinkClass}>
          <CheckSquare className="mr-3" size={20} />
          My Tasks
        </NavLink>
        <NavLink to="/goals" className={navLinkClass}>
          <Target className="mr-3" size={20} />
          Goals
        </NavLink>
        <NavLink to="/members" className={navLinkClass}>
          <Users className="mr-3" size={20} />
          Members
        </NavLink>
        <NavLink to="/sprints" className={navLinkClass}>
          <ListTodo className="mr-3" size={20} />
          Sprints
        </NavLink>
        <NavLink to="/backlog" className={navLinkClass}>
          <ClipboardList className="mr-3" size={20} />
          Backlog
        </NavLink>
      </nav>

      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-500 px-4 mb-2">WORKSPACE</h2>
        <div className="space-y-1">
          <NavLink to="/board" className={navLinkClass}>
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            Hikoko Design
          </NavLink>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
            Website Design
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
            Mobile Design
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;