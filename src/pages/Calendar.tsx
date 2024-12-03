import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft size={20} />
            </button>
            <span className="font-medium">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight size={20} />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Event
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-7 gap-px border-b">
          {days.map((day) => (
            <div key={day} className="p-4 text-sm font-medium text-gray-900 text-center">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-px">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className={`p-4 min-h-[120px] ${
                index % 7 === 0 || index % 7 === 6 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <span className={`text-sm ${
                index === 8 ? 'font-bold text-blue-600' : 'text-gray-500'
              }`}>
                {((index + 1) % 31) || 31}
              </span>
              {index === 8 && (
                <div className="mt-2">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded text-xs">
                    Team Meeting
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;