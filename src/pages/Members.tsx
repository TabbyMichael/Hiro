import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Members = () => {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      location: 'San Francisco, CA'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(member => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">{member.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">{member.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{member.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;