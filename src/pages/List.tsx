import React from 'react';
import { List as ListIcon, Calendar as CalendarIcon, Tag, Clock } from 'lucide-react';

const List = () => {
  const tasks = [
    {
      id: 1,
      title: 'UX Adjustments',
      project: 'Hikoko Design',
      tags: ['Research'],
      dueDate: 'Tomorrow',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Slack Integration',
      project: 'Website Design',
      tags: ['Development'],
      dueDate: 'Next Week',
      priority: 'Medium'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Task List</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
            <ListIcon size={20} />
          </button>
          <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
            <CalendarIcon size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.project}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Tag size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{task.tags[0]}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{task.dueDate}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  task.priority === 'High' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;