import React from 'react';
import Column from './Column';
import { Plus } from 'lucide-react';
import type { Column as ColumnType } from '../../types';

const mockData: ColumnType[] = [
  {
    id: '1',
    title: 'TODO',
    color: '#3B82F6',
    tasks: [
      {
        id: '1',
        title: 'UX Adjustments',
        description: 'Adjust hero section for UI from page',
        tags: ['Research'],
        assignees: [
          {
            id: '1',
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        commentCount: 3,
        attachmentCount: 2
      }
    ]
  },
  {
    id: '2',
    title: 'IN WORK',
    color: '#8B5CF6',
    tasks: [
      {
        id: '2',
        title: 'Slack Integration',
        description: 'Add a test to the portal to let the user connect their Slack Account',
        tags: ['Development'],
        assignees: [
          {
            id: '2',
            name: 'Jane Smith',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        commentCount: 5,
        attachmentCount: 1,
        dueDate: 'Tomorrow'
      }
    ]
  },
  {
    id: '3',
    title: 'QA',
    color: '#F59E0B',
    tasks: [
      {
        id: '3',
        title: 'Dashboard Design',
        description: 'Create a dashboard UI for the analytics section',
        tags: ['UI Design'],
        assignees: [
          {
            id: '3',
            name: 'Mike Johnson',
            avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        commentCount: 2,
        attachmentCount: 3
      }
    ]
  },
  {
    id: '4',
    title: 'COMPLETED',
    color: '#10B981',
    tasks: [
      {
        id: '4',
        title: 'Presentation',
        description: 'Help businesses to clearly define their annual e-commerce digital strategy',
        tags: ['Planning'],
        assignees: [
          {
            id: '4',
            name: 'Sarah Wilson',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        commentCount: 11,
        attachmentCount: 3
      }
    ]
  }
];

const Board = () => {
  return (
    <div className="flex-1 p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hikoko Design</h1>
          <div className="flex items-center mt-2">
            <div className="flex -space-x-2 mr-4">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://images.unsplash.com/photo-${1490000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={`Team member ${i + 1}`}
                />
              ))}
            </div>
            <button className="text-sm text-gray-500 hover:text-gray-700">Only My</button>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          New Task
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6">
        {mockData.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board;