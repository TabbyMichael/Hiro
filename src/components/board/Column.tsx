import React from 'react';
import TaskCard from './TaskCard';
import type { Column as ColumnType } from '../../types';
import { MoreHorizontal } from 'lucide-react';

interface ColumnProps {
  column: ColumnType;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
  return (
    <div className="flex flex-col w-80 bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span
            className={`w-2 h-2 rounded-full mr-2`}
            style={{ backgroundColor: column.color }}
          ></span>
          <h2 className="font-semibold text-gray-900">{column.title}</h2>
          <span className="ml-2 text-sm text-gray-500">{column.tasks.length}</span>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <MoreHorizontal size={20} className="text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;