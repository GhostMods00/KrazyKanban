import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData';

interface SwimLaneProps {
  title: string;
  tickets: TicketData[];
  className: string;
  onDelete: (id: number) => void;
}

const SwimLane = ({ title, tickets, className, onDelete }: SwimLaneProps) => {
  return (
    <div className={`swim-lane ${className}`}>
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <TicketCard 
          key={ticket.id} 
          ticket={ticket} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SwimLane;