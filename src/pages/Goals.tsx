import React from 'react';
import { Target, CheckCircle2, Clock } from 'lucide-react';

const Goals = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Goals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Target className="text-blue-600 mr-2" size={24} />
              <h2 className="text-lg font-semibold">Q1 Objectives</h2>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              In Progress
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              <span>Launch new design system</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-gray-400 mr-2" size={20} />
              <span>Implement user feedback system</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-gray-400 mr-2" size={20} />
              <span>Optimize performance metrics</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">60% completed</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Target className="text-purple-600 mr-2" size={24} />
              <h2 className="text-lg font-semibold">Team Goals</h2>
            </div>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
              Ongoing
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              <span>Improve team collaboration</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-gray-400 mr-2" size={20} />
              <span>Reduce bug resolution time</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-gray-400 mr-2" size={20} />
              <span>Increase test coverage</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">45% completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;