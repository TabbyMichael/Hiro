import React from 'react';
import { MessageSquare, Paperclip, Calendar } from 'lucide-react';
import type { Task } from '../../types';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-gray-900">{task.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {task.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-4">{task.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.assignees.map((assignee, index) => (
            <img
              key={index}
              src={assignee.avatar}
              alt={assignee.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>

        <div className="flex items-center space-x-3 text-gray-500">
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span className="text-xs">{task.commentCount}</span>
          </div>
          <div className="flex items-center">
            <Paperclip size={16} className="mr-1" />
            <span className="text-xs">{task.attachmentCount}</span>
          </div>
          {task.dueDate && (
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span className="text-xs">{task.dueDate}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;