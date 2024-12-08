import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SwimLane from '../components/Swimlane';
import { getTickets, deleteTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import Auth from '../utils/auth';

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/login');
      return;
    }
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const data = await getTickets();
      setTickets(data);
    } catch (err) {
      console.error('Error loading tickets:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (id === null) return;
    try {
      await deleteTicket(id);
      loadTickets();
    } catch (err) {
      console.error('Error deleting ticket:', err);
    }
  };

  const todoTickets = tickets.filter(ticket => ticket.status === 'Todo');
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In Progress');
  const doneTickets = tickets.filter(ticket => ticket.status === 'Done');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SwimLane
          title="Todo"
          tickets={todoTickets}
          className="bg-purple-100 rounded-lg shadow-md p-4"
          onDelete={handleDelete}
        />
        <SwimLane
          title="In Progress"
          tickets={inProgressTickets}
          className="bg-primary text-white rounded-lg shadow-md p-4"
          onDelete={handleDelete}
        />
        <SwimLane
          title="Done"
          tickets={doneTickets}
          className="bg-secondary text-white rounded-lg shadow-md p-4"
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Board;