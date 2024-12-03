import React, { useState } from 'react';
import SprintBoard from '../components/sprint/SprintBoard';
import { azureDevOpsService } from '../services/azureDevOpsService';

const SprintManagement: React.FC = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newStory, setNewStory] = useState({
        title: '',
        description: '',
        storyPoints: ''
    });

    const handleCreateStory = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await azureDevOpsService.createUserStory(
                newStory.title,
                newStory.description,
                Number(newStory.storyPoints) || undefined
            );
            setIsCreateModalOpen(false);
            setNewStory({ title: '', description: '', storyPoints: '' });
            // Refresh the sprint board
            window.location.reload();
        } catch (error) {
            console.error('Error creating user story:', error);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Sprint Management</h1>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Create User Story
                </button>
            </div>

            <SprintBoard />

            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Create User Story</h2>
                        <form onSubmit={handleCreateStory}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        value={newStory.title}
                                        onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        value={newStory.description}
                                        onChange={(e) => setNewStory({...newStory, description: e.target.value})}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        rows={3}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Story Points</label>
                                    <input
                                        type="number"
                                        value={newStory.storyPoints}
                                        onChange={(e) => setNewStory({...newStory, storyPoints: e.target.value})}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SprintManagement;
