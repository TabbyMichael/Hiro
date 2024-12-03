import React from 'react';
import TaskCard from '../components/board/TaskCard';

const MyTasks = () => {
  const myTasks = [
    {
      id: '1',
      title: 'Update Design System',
      description: 'Implement new color palette and typography guidelines',
      tags: ['Design', 'High Priority'],
      assignees: [
        {
          id: '1',
          name: 'John Doe',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      ],
      commentCount: 5,
      attachmentCount: 2,
      dueDate: 'Tomorrow'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;