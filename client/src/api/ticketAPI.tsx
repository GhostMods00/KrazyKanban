import { TicketData } from '../interfaces/TicketData';
import Auth from '../utils/auth';

// Get all tickets
export const getTickets = async (): Promise<TicketData[]> => {
  try {
    const response = await fetch('/api/tickets', {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Get a single ticket by ID
export const retrieveTicket = async (id: number): Promise<TicketData> => {
  try {
    const response = await fetch(`/api/tickets/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ticket');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Create a new ticket
export const createTicket = async (ticketData: Partial<TicketData>): Promise<TicketData> => {
  try {
    const response = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(ticketData)
    });

    if (!response.ok) {
      throw new Error('Failed to create ticket');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Update a ticket
export const updateTicket = async (id: number, ticketData: Partial<TicketData>): Promise<TicketData> => {
  try {
    const response = await fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(ticketData)
    });

    if (!response.ok) {
      throw new Error('Failed to update ticket');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Delete a ticket
export const deleteTicket = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`/api/tickets/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete ticket');
    }
  } catch (error) {
    throw error;
  }
};