// // src/interfaces/TicketData.ts
// export interface TicketData {
//   id: number;
//   name: string;
//   description: string;
//   status: string;
//   assignedUserId?: number;
//   assignedUser?: {
//     username: string;
//   };
// }

// src/interfaces/TicketData.ts
export interface TicketData {
  id: number;
  name: string;
  description: string;
  status: string;
  assignedUserId: number;  // Add this line
  assignedUser?: {
    username: string;
  };
}