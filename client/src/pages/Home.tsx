import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Krazy Kanban Board
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A simple and efficient way to manage your tasks and projects. 
            Organize your work using our intuitive Kanban board system with 
            customizable columns for Todo, In Progress, and Done tasks.
          </p>
          <div className="space-x-4">
            <Link 
              to="/login"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
            <a 
              href="#features"
              className="inline-block bg-secondary text-background px-8 py-3 rounded-lg hover:bg-orange-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div id="features" className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-primary text-xl font-bold mb-4">Simple Task Management</h3>
            <p className="text-white/80">Create, edit, and organize tasks with our intuitive interface.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-primary text-xl font-bold mb-4">Team Collaboration</h3>
            <p className="text-white/80">Work together efficiently by assigning and tracking tasks.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-primary text-xl font-bold mb-4">Progress Tracking</h3>
            <p className="text-white/80">Monitor project progress with visual board layout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;