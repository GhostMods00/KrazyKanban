// src/components/TicketCard.tsx
import { Link } from 'react-router-dom';
import { TicketData } from '../interfaces/TicketData';

interface TicketCardProps {
  ticket: TicketData;
  onDelete: (id: number) => void;
}

const TicketCard = ({ ticket, onDelete }: TicketCardProps) => {
  const handleDelete = () => {
    onDelete(ticket.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{ticket.name}</h3>
      <p className="text-gray-600 mb-3">{ticket.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        Assigned to: {ticket.assignedUser?.username || 'Unassigned'}
      </p>
      
      <div className="flex space-x-3">
        <Link 
          to={`/edit-ticket/${ticket.id}`}
          state={ticket}
          className="text-primary hover:text-secondary transition-colors"
        >
          Edit
        </Link>
        <button 
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;