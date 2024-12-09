// src/pages/EditTicket.tsx
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTicket = async (ticketData: TicketData) => {
    if (!ticketData?.id) return;
    
    try {
      const data = await retrieveTicket(Number(ticketData.id));
      setTicket(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
      setTicket(null);
    }
  };

  useEffect(() => {
    if (state) {
      fetchTicket(state);
    }
  }, [state]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ticket?.id) {
      console.error('Ticket data is undefined.');
      return;
    }

    try {
      await updateTicket(Number(ticket.id), ticket);
      navigate('/');
    } catch (err) {
      console.error('Failed to update ticket:', err);
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => prev ? { ...prev, [name]: value } : null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => prev ? { ...prev, [name]: value } : null);
  };

  return (
    <div className="container">
      {ticket ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Edit Ticket</h1>
          
          <label htmlFor="tName">Ticket Name</label>
          <textarea
            id="tName"
            name="name"
            value={ticket.name}
            onChange={handleTextAreaChange}
            required
          />

          <label htmlFor="tStatus">Ticket Status</label>
          <select
            id="tStatus"
            name="status"
            value={ticket.status}
            onChange={handleChange}
            required
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <label htmlFor="tDescription">Ticket Description</label>
          <textarea
            id="tDescription"
            name="description"
            value={ticket.description}
            onChange={handleTextAreaChange}
            required
          />

          <button type="submit">Submit Form</button>
        </form>
      ) : (
        <div>Issues fetching ticket</div>
      )}
    </div>
  );
};

export default EditTicket;