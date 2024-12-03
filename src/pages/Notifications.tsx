import React from 'react';
import { Bell, MessageSquare, Users, Star } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'mention',
      message: 'Sarah mentioned you in Design System task',
      time: '2 hours ago',
      icon: MessageSquare,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 2,
      type: 'team',
      message: 'New team member James joined the project',
      time: '5 hours ago',
      icon: Users,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      type: 'favorite',
      message: 'Your task was marked as important',
      time: 'Yesterday',
      icon: Star,
      color: 'text-yellow-600 bg-yellow-100'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Notifications</h2>
            <button className="text-blue-600 text-sm hover:text-blue-700">
              Mark all as read
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {notifications.map(notification => {
            const Icon = notification.icon;
            return (
              <div key={notification.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${notification.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Bell size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;