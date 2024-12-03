import React from 'react';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, John!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Today's Tasks</h3>
            <Calendar className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-gray-500">3 completed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Hours Logged</h3>
            <Clock className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold">32.5h</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Project Progress</h3>
            <BarChart2 className="text-purple-600" size={20} />
          </div>
          <p className="text-3xl font-bold">67%</p>
          <p className="text-sm text-gray-500">On track</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm">JD</span>
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">John Doe</span> completed task{' '}
                  <span className="text-blue-600">Design System Update</span>
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;