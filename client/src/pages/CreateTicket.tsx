// src/components/CreateTicket.tsx
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<Partial<TicketData>>({
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1  // Default value
  });

  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve user info', err);
      setUsers([]);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTicket) {
      try {
        await createTicket(newTicket);
        navigate('/');
      } catch (err) {
        console.error('Error creating ticket:', err);
      }
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => prev ? { ...prev, [name]: value } : {});
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => prev ? { ...prev, [name]: value } : {});
  };

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => prev ? { 
      ...prev, 
      [name]: Number(value) 
    } : {});
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>
        <label htmlFor='tName'>Ticket Name</label>
        <textarea 
          id='tName'
          name='name'
          value={newTicket?.name ?? ''}
          onChange={handleTextAreaChange}
        />
        <label htmlFor='tStatus'>Ticket Status</label>
        <select 
          name='status' 
          id='tStatus'
          value={newTicket?.status ?? 'Todo'}
          onChange={handleTextChange}
        >
          <option value='Todo'>Todo</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        <label htmlFor='tDescription'>Ticket Description</label>
        <textarea 
          id='tDescription'
          name='description'
          value={newTicket?.description ?? ''}
          onChange={handleTextAreaChange}
        />
        <label htmlFor='tUserId'>User's ID</label>
        <select
          id='tUserId'
          name='assignedUserId'
          value={newTicket?.assignedUserId ?? ''}
          onChange={handleUserChange}
        >
          {users.length > 0 ? users.map((user) => (
            <option key={user.id} value={user.id ?? ''}>
              {user.username}
            </option>
          )) : (
            <option value="">No users available</option>
          )}
        </select>
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
};

export default CreateTicket;