import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const isLoggedIn = Auth.loggedIn();

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-lg px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          Krazy Kanban Board
        </Link>

        <ul className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <li>
                <Link 
                  to="/board" 
                  className="text-white hover:text-primary transition-colors"
                >
                  Board
                </Link>
              </li>
              <li>
                <Link 
                  to="/new-ticket" 
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  New Ticket
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link 
                  to="/login"
                  className="text-white hover:text-primary transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/new-ticket"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  New Ticket
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;