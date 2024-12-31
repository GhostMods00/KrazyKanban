# 🎯 Krazy Kanban Board

[![React](https://img.shields.io/badge/React-v18.x-61DAFB.svg)](https://reactjs.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green.svg)](https://nodejs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue.svg)](https://www.typescriptlang.org/)

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15.x-336791.svg)](https://www.postgresql.org/)



A modern, efficient task management system built with TypeScript, React, and PostgreSQL. Organize your work using an intuitive Kanban board system with customizable columns for Todo, In Progress, and Done tasks.


### Home Page
![App Screenshot1](https://i.imgur.com/pgeWWxv.png)

### Creating New Ticket
![App Screenshot2](https://i.imgur.com/59fs9aQ.png)

### Log In
![App Screenshot3](https://i.imgur.com/EbqwOyQ.png)

## 🌟 Features

- **📊 Intuitive Kanban Board**: Drag-and-drop interface for managing tasks
- **👥 User Authentication**: Secure JWT-based authentication system
- **🎨 Modern UI**: Clean, responsive design using Tailwind CSS
- **🔐 Role-Based Access**: Manage tickets based on user permissions
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- React Router for navigation

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Sequelize ORM
- JWT for authentication
- bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v15 or higher)
- npm or yarn

## ⚙️ Installation

1. Clone the repository:
```bash
git clone git@github.com:your_username/KrazyKanban.git
```

2. Navigate to the project directory:
```bash
cd KrazyKanban
```

3. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

4. Start the development server:
```bash
# Start the backend server (from server directory) npm run dev # Start the frontend development server (from client directory) npm run dev
```
## 📝 Usage 
- **🏠  Login/Register**:  
 * Use the provided seed users or create a new account
   * Default users:
      * Username: JollyGuru, Password: password
      * Username: SunnyScribe, Password: password
- **💼 Managing Tickets**: 
* Create new tickets using the "New Ticket" button
   * Drag tickets between columns to update their status
   * Edit tickets by clicking the edit icon
   * Delete tickets using the delete button
- **📄 User Management**: 
   * Assign tickets to different users
   * Track ticket ownership and progress


## 🚀 Deployment

## This application can be deployed using Render:

```bash
# Build backend cd server npm run build # Build frontend cd ../client npm run build
```

1. Create a new Web Service for the backend
2. Create a new Static Site for the frontend
3. Set up PostgreSQL database on Render
4. Configure environment variables in Render dashboard

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💫 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔍 Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

Let's connect! Reach out to me through:

- 🌐 **Portfolio**: www.waleedzaryab.com
- 🐱 **GitHub**: https://github.com/GhostMods00
- 📧 **Email**: westendcrew1982@gmail.com

---

Made with ❤️ by Waleed Zaryab | © 2024 All Rights Reserved ✨
