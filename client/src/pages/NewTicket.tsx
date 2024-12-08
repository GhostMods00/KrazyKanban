import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import Auth from '../utils/auth';

type TicketFormData = {
  title: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Done';
};

const NewTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TicketFormData>({
    title: '',
    description: '',
    status: 'Todo'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!Auth.loggedIn()) {
      navigate('/login');
      return;
    }

    try {
      await createTicket({
        ...formData,
        status: formData.status as 'Todo' | 'In Progress' | 'Done'
      });
      navigate('/board');
    } catch (err) {
      setError('Failed to create ticket');
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-primary mb-6">Create New Ticket</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-primary"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-primary min-h-[100px]"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Status</label>
            <select
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-primary"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Todo' | 'In Progress' | 'Done' })}
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/board')}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;