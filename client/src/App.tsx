import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Board from './pages/Board';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';
import EditTicket from './pages/EditTicket';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/edit-ticket/:id" element={<EditTicket />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">404: Page Not Found</h1>
                <p className="text-white text-xl">¯\_(ツ)_/¯</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;